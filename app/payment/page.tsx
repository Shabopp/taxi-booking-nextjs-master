"use client";  // Ensure this directive is at the very top

import CheckoutForm from "@/components/Payment/CheckoutForm";
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import React, { useContext } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment: React.FC = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    const options: any = {
        mode: 'payment',
        amount: 50,
        currency: 'usd'
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payment;
