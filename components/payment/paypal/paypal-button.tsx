'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        paypal?: any;
    }
}

export default function PaypalPaymentButton() {
    const paypalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent multiple renders in dev mode (Fast Refresh)
        if (!paypalRef.current || document.getElementById('paypal-button-loaded')) return;

        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AXCCfE0puwLuZcZ-fiOCPNT7aoiUvhF4BBKTwnRRD7OaFYC4GSwM3gAnFyoOgoOqjxqKC0Wc3l01tqh5&vault=true&intent=subscription";
        script.async = true;
        script.id = 'paypal-button-loaded';

        script.onload = () => {
            if (!window.paypal || !paypalRef.current) return;

            window.paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'paypal',
                    tagline: "false"
                },
                createSubscription(data: any, actions: any) {
                    return actions.subscription.create({
                        plan_id: 'P-52841562CM4663925M7ZNA6Y',
                    });
                },
                onApprove(data: any, actions: any) {
                    window.location.href = "toeflgoglobal.com/practice-questions?payment_id='52841562CM4663925M7ZNA6Y'"
                }
            }).render(paypalRef.current);
        };

        document.body.appendChild(script);
    }, []);

    return <div ref={paypalRef}></div>;
}