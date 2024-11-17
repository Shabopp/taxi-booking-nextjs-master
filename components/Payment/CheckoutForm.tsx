import React from 'react';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            return;
        }

        const res = await fetch("/api/create-payment-intent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 58,
            }),
        });

        const { clientSecret } = await res.json();

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://localhost:3000/",
            },
        });

        if (error) {
            console.error(error);
        } else {
            console.log('Payment confirmed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
