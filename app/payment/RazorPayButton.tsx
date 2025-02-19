import { useEffect, useState } from 'react';

interface PaymentButtonProps {
  id: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', id);
    script.async = true;

    const form = document.getElementById(`razorpay-form-${id}`);
    form?.appendChild(script);

    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [id]);

  return (
    <div className={`z-[1000000] flex justify-center items-center ${isLoading && "mt-3 mb-4"}`}>
      {isLoading && (
        <div className="absolute animate-pulse bg-gray-300 rounded-lg h-12 w-48"></div>
      )}

      <form id={`razorpay-form-${id}`} className='z-[100000]'></form>
    </div>
  );
};

export default PaymentButton;
