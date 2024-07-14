import { useEffect } from 'react';

interface PaymentButtonProps {
  id: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ id }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', id);
    script.async = true;

    const form = document.getElementById(`razorpay-form-${id}`);
    form?.appendChild(script);

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [id]);

  return (
    <div>
      <form id={`razorpay-form-${id}`}></form>
    </div>
  );
};

export default PaymentButton;
