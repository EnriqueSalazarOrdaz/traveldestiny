import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email.trim() === '') {
            setMessage('Please enter a valid email address');
            return;
        }

        setMessage('Thank you for subscribing!');
        setEmail(''); // Reset the email field after submission

        // Here you would typically send the email to your backend server.
        // For example, you can use the fetch API to do so:
        // fetch('your-api-endpoint', { method: 'POST', body: JSON.stringify({ email }) })
    };

    return (
        <div className="subscription-container">
            <h2>Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    );
};

export default SubscriptionForm;
