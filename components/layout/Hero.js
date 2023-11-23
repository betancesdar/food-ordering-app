import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <section className="hero">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with a&nbsp;
            <span className="text-primary">Pizza!</span>
            </h1>
            <p className="my-6 text-gray-500 text-sm">
                Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life.
            </p>
                <div className="flex gap-4 text-sm">
                    <button className="flex gap-2 uppercase items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary hover:border">
                        Order now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold hover:text-primary">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/main-pizza.png'} layout={'fill'} objectFit={'contain'} alt="Pizza!" className="-z-10 animate-spin animate-spin-slow infinite"/>
            </div>
        </section>
    );
}