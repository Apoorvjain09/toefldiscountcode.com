"use client";
import { Seo } from "@/components/Head/Seo";
import FeaturesSection from "@/components/ui/FeaturesSectionLandingPage";
import { useState, lazy, Suspense, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Alert from "@/components/ui/Alert";

const TestCard = lazy(() => import("@/components/ui/TestCard"));

type BeforeInstallPromptEvent = Event & {
    prompt: () => void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function Page() {
    const [showAlert, setShowAlert] = useState(false);
    const [showTests, setShowTests] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const { isSignedIn } = useUser();

    const handleGetStartedClick = () => {
        if (isSignedIn) {
            setShowTests(true);
            return;
        } else {
            window.location.href = "https://accounts.toeflgoglobal.com/sign-up?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2F";
            return;
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                setDeferredPrompt(null);
            });
        }
    };

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/custom-sw.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        }

        const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
            console.log('beforeinstallprompt event fired');
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
        };
    }, []);

    return (
        <>
            <Seo
                title='Toefl Go Global - AI Mock tests'
                description='Prepare for your TOEFL exam with our AI-powered mock tests. Experience realistic test simulations, receive detailed feedback, and track your progress. Access a wealth of study materials, practice questions, and expert advice to excel in your TOEFL exam. Join our community of learners and maximize your TOEFL score with Toefl Go Global.'
                url='https://toeflgoglobal.com'
                image='https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1'
            />
            {showAlert && (
                <Alert
                    message="Please log in to continue"
                    type="warning"
                    onClose={handleCloseAlert}
                />
            )}
            {!showTests ? (
                <div>
                    <FeaturesSection onGetStartedClick={handleGetStartedClick} />
                    {deferredPrompt && (
                        <button onClick={handleInstallClick}>
                            Install App
                        </button>
                    )}
                </div>
            ) : (
                <Suspense fallback={<div></div>}>
                    <div className="mx-auto py-20 p-2">
                        <h2 className="text-3xl font-bold mb-10 text-center">Available Tests</h2>
                        <div className="flex flex-wrap gap-6 justify-center items-center">
                            {Array.from({ length: 6 }, (_, i) => (
                                <TestCard key={i} testNumber={i + 1} />
                            ))}
                        </div>
                    </div>
                </Suspense>
            )}
        </>
    );
}
