"use client";
import Image from "next/image"
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); 

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password, phone}),
            headers: {'Content-type': 'application/json'},
        });
    }

    return(
    <section className="mt-8">
        <h1 className="text-center text-primary text-4xl font-semibold">
            Sign Up
        </h1>
        <form className="block max-w-sm mx-auto mb-80" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="text" placeholder="enter your phone number" value={phone} onChange={e => setPhone(e.target.value)}/>
            <button type="submit">Register</button>
            <div className="my-4 text-center text-gray-500 font-semibold">
                or login with socialmedia 
            </div>
            <button className="flex gap-4 justify-center">
                <Image src={'/google.png'} alt={''} width={24} height={24}/>
                Login with google
            </button>
        </form>
    </section>
    );
}