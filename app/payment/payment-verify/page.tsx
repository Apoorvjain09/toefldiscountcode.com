"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const PaymentVerify: React.FC = () => {
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const verifyPayment = async () => {
      if (!user) {
        if (typeof window !== "undefined") {
          alert("Some Technical Glitch Occoured, Please DM the admin in the 'MS in US' community group");
          window.location.href = "/";
        }
        return;
      }

      const userId = user.id;

      try {
        const response = await fetch('/api/updateMembership', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, membershipType: '6MonthMembership' }),
        });

        const data = await response.json();

        if (data.success) {
          console.log('Membership updated successfully');
          // Redirect to a success page or show a success message
          push('/');
        } else {
          console.error('Failed to update membership:', data.error);
          push('/');
        }
      } catch (error) {
        console.error('Error updating membership:', error);
      }
    };

    verifyPayment();
  }, [push, user]);

  return <LoadingSpinner />;
};

export default PaymentVerify;
