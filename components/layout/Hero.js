import Image from "next/image";

export default function Hero() {
    return(
        <section>
            <h1>Everything is better with a Pizza</h1>
            <p>
                Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life.
            </p>
            <div>
                <Image src={'/main-pizza.png'} layout={'fill'} objectFit={'contain'} alt="Pizza!" className="animate-spin animate-spin-slow infinite"/>
            </div>
        </section>
    );
}