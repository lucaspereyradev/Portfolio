import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm({ lang }) {
    const input = lang.input;
    const [message, setMessage] = useState(null);

    const handleSubmitEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE,
                import.meta.env.VITE_EMAILJS_TEMPLATE,
                event.target,
                import.meta.env.VITE_EMAILJS_PUBLICKEY
            )
            .then(() => {
                setMessage('Se envio correctamente. Te respondere dentro de poco!');
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
    };

    return (
        <form
            className="ml-16 flex flex-col gap-y-4 max-lg:ml-0 xl:ml-0"
            onSubmit={handleSubmitEmail}
        >
            {message && (
                <p className="-mb-2 rounded-md bg-emerald-400 py-2 text-center text-white">
                    {message}
                </p>
            )}
            <input
                className="rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-lg focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder={input.namePlaceholder}
                required
            />
            <input
                className="rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-md focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
            />
            <textarea
                className="h-[200px] resize-none rounded-md px-6 py-3 transition-all hover:shadow-md focus:shadow-md focus:outline-none"
                name="message"
                id="message"
                placeholder={input.descriptionPlaceholder}
                required
            ></textarea>
            <button className="mx-auto w-[50%] rounded-md bg-emerald-500 py-2 text-white transition-colors hover:bg-emerald-700/90 lg:w-[35%] 2xl:w-[25%]">
                {lang.btn}
            </button>
        </form>
    );
}

export default ContactForm;
