"use client";
import Image from "next/image"
import { useState } from "react";
import  {toast}  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); 
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setCreatingUser(true);

        try {
            await fetch("/api/register", {
              method: "POST",
              body: JSON.stringify({email, password, phone}),
              headers: {"Content-type": "application/json"},
            });
            setUserCreated(true);
            console.log('para probar que esta funcionando')
            toast.success('User created!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setCreatingUser(false);

            //clean the input
            setEmail('');
            setPassword('');
            setPhone('');
        } catch (error) {
            console.log('Error creating the user: ', error);
            toast.error('Error creating the user. Please, Try again!');
            setCreatingUser(false);   
        }   
       
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