export default function RegisterPage() {
    return(
    <section className="mt-8">
        <h1 className="text-center text-primary text-4xl font-semibold">
            Sign Up
        </h1>
        <form>
            <input type="email" placeholder="enter your email" />
            <input type="password" placeholder="enter your password" />
            <input type="text" placeholder="enter your phone number" />
            <button type="submit">Register</button>
        </form>
    </section>
    );
}