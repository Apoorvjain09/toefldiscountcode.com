import React from "react"

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-700">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
            <p className="mb-6">
                Last updated: <span className="font-semibold">26 Jan 2025</span>
            </p>
            <p className="mb-4">
                This extension is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you use our browser extension.
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">1. Data Collection</h2>
            <p className="mb-4">
                We may collect the following information:
                <ul className="list-disc list-inside pl-4">
                    <li>Page metadata: TOEFL specific pages you visit within predefined domains.</li>
                    <li>User traits stored in your browser's localStorage (if available).</li>
                </ul>
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">2. Purpose of Data Collection</h2>
            <p className="mb-4">
                The data we collect is used exclusively to:
                <ul className="list-disc list-inside pl-4">
                    <li>Provide TOEFL discount codes and preparation resources.</li>
                    <li>Log analytics to improve the extension’s functionality.</li>
                </ul>
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">3. Data Usage</h2>
            <p className="mb-4">
                All data collected is securely transmitted to a Google Form for logging and analytics purposes. We do not share your data with third parties or use it for any purposes other than those stated in this policy.
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">4. User Consent</h2>
            <p className="mb-4">
                Before collecting or processing your data, we explicitly seek your consent through a permission modal. If you decline, no data will be collected or processed.
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">5. Data Security</h2>
            <p className="mb-4">
                We take reasonable measures to protect your data from unauthorized access or misuse. However, no method of data transmission over the internet is completely secure.
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">6. Your Rights</h2>
            <p className="mb-4">
                You have the right to:
                <ul className="list-disc list-inside pl-4">
                    <li>Opt out of data collection by declining consent.</li>
                    <li>Contact us to request deletion of your data.</li>
                </ul>
            </p>

            <h2 className="text-xl font-bold text-blue-500 mb-2">7. Contact Us</h2>
            <p className="mb-4">
                If you have any questions about this Privacy Policy or your data, please contact us at:{" "}
                <a href="mailto:support@example.com" className="text-blue-600 underline">
                    apoorv@mja.in
                </a>
            </p>

            <p className="text-sm text-gray-500">
                By using this extension, you agree to the terms outlined in this Privacy Policy.
            </p>
        </div>
    );
}