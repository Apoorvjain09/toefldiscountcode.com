"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

const getElapsedDays = (startDate: string) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    // Add one day to the current date for testing purposes
    currentDate.setDate(currentDate.getDate() + 1);
    const timeDiff = currentDate.getTime() - start.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return daysDiff >= 0 ? daysDiff : 0;
};

export default function Lectures() {
    const [elapsedDays, setElapsedDays] = useState(0);
    const [selectedTab, setSelectedTab] = useState<'lectures' | 'practice'>('lectures');
    const [planType, setPlanType] = useState<string | null>(null);
    const { user } = useUser();

    useEffect(() => {
        if (user && user.publicMetadata) {
            const startDate = user.publicMetadata.startDate as string;
            const planTypeFromMetadata = user.publicMetadata.planType as string;

            if (startDate) {
                const daysElapsed = getElapsedDays(startDate);
                setElapsedDays(daysElapsed);
            }
            if (planTypeFromMetadata) {
                setPlanType(planTypeFromMetadata);
            }
        }
    }, [user]);

    const videoUrls = [
        ["https://ucdf84ab72293c4a4591cb94ce7d.dl.dropboxusercontent.com/cd/0/inline/CVqh8VjxKB5GU5CtMzQuvp8ZswpsvsWP05zEnHeYUdu-EL0thxMGW8pvR6c4DNI9cinAnb303e7VEpgkBOkvGi_GgFwbeWHCT_NgPwmiZEK3VRKYGESs-AeHOgmbTmXzpvykeE-5Ll2ouKbE9GNDb4YC/file#", "https://uc2f5b05cf4a73234ca16e3f8674.dl.dropboxusercontent.com/cd/0/inline/CVqdl0CAtj0NdVT5lXifh2tyI_wqDmRxHTc4gxX-Bp_LIZ0NAOfZ1J82ySCUqu4_gRdyEM1MI5GfZGCQRoiybirQ2iX7q2m3U30To99kLIv6KCGSNFgDoT9EpNkkhRcCL3npY-PRU1ACkKGr6oyf60wa/file#"],
        ["https://www.dropbox.com/s/def456/video3.mp4?raw=1", "https://www.dropbox.com/s/ghi789/video4.mp4?raw=1", "https://www.dropbox.com/s/jkl101/video5.mp4?raw=1"],
        ["https://www.dropbox.com/s/mno112/video6.mp4?raw=1", "https://www.dropbox.com/s/pqr131/video7.mp4?raw=1"],
        ["https://www.dropbox.com/s/stu145/video8.mp4?raw=1", "https://www.dropbox.com/s/vwx167/video9.mp4?raw=1"],
        ["https://www.dropbox.com/s/yz2341/video10.mp4?raw=1", "https://www.dropbox.com/s/abc234/video11.mp4?raw=1"],
        ["https://www.dropbox.com/s/def345/video12.mp4?raw=1", "https://www.dropbox.com/s/ghi456/video13.mp4?raw=1"],
        ["https://www.dropbox.com/s/jkl567/video14.mp4?raw=1", "https://www.dropbox.com/s/mno678/video15.mp4?raw=1"],
        ["https://www.dropbox.com/s/def456/video3.mp4?raw=1", "https://www.dropbox.com/s/ghi789/video4.mp4?raw=1", "https://www.dropbox.com/s/jkl101/video5.mp4?raw=1"],
        ["https://www.dropbox.com/s/mno112/video6.mp4?raw=1", "https://www.dropbox.com/s/pqr131/video7.mp4?raw=1"],
        ["https://www.dropbox.com/s/stu145/video8.mp4?raw=1", "https://www.dropbox.com/s/vwx167/video9.mp4?raw=1"],
        ["https://www.dropbox.com/s/yz2341/video10.mp4?raw=1", "https://www.dropbox.com/s/abc234/video11.mp4?raw=1"],
        ["https://www.dropbox.com/s/def345/video12.mp4?raw=1", "https://www.dropbox.com/s/ghi456/video13.mp4?raw=1"],
        ["https://www.dropbox.com/s/jkl567/video14.mp4?raw=1", "https://www.dropbox.com/s/mno678/video15.mp4?raw=1"],
        ["https://www.dropbox.com/s/def456/video3.mp4?raw=1", "https://www.dropbox.com/s/ghi789/video4.mp4?raw=1", "https://www.dropbox.com/s/jkl101/video5.mp4?raw=1"],
        ["https://www.dropbox.com/s/mno112/video6.mp4?raw=1", "https://www.dropbox.com/s/pqr131/video7.mp4?raw=1"]
    ];

    const renderLectures = () => {
        const lectures = [];
        for (let i = 0; i < Math.min(elapsedDays, videoUrls.length); i++) {
            lectures.push(
                <div key={i} className='border-2 bg-blue-100 p-3 rounded-lg mb-10'>
                    <h3 className="font-semibold">Day {i + 1}:</h3>
                    <ul className="flex flex-wrap gap-10 ml-5 mb-4">
                        {videoUrls[i].map((url, index) => (
                            <li key={index}>
                                <video controls className="rounded-lg mt-2 h-[200px]">
                                    <source src={url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        return lectures;
    };

    const renderPractice = () => {
        return (
            <div>
                <h3 className="font-semibold">Practice Activities</h3>
                <p>Include practice activities specific to each day here.</p>
            </div>
        );
    };

    if (!planType) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold sm:text-3xl mb-5">Personalized Lectures for {planType}</h2>
            {(planType === '15-day plan') && (
                <div>
                    <div>
                        <h3 className="font-semibold">Day Counter: {elapsedDays} days elapsed</h3>
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${(elapsedDays / 15) * 100}%` }}></div>
                        </div>
                    </div>
                </div>
            )}
            {(planType === '30-day plan') && (
                <div>30-day plan</div>
            )}
            {(planType === '45-day plan') && (
                <div>45-day plan</div>
            )}

            <div className="mt-6">
                <div className="flex border-b mb-4">
                    <button
                        className={`px-4 py-2 font-semibold ${selectedTab === 'lectures' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTab('lectures')}
                    >
                        Lectures
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold ${selectedTab === 'practice' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTab('practice')}
                    >
                        Practice
                    </button>
                </div>

                {selectedTab === 'lectures' && renderLectures()}
                {selectedTab === 'practice' && renderPractice()}
            </div>
        </div>
    );
}
