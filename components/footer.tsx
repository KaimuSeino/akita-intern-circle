"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter()
    const handleX = () => {
        router.push("https://x.com/akita_intern_")
    }
    const handleInsta = () => {
        router.push("https://www.instagram.com/akita_intern_/")
    }
    return (
        <section className="w-full p-4 flex flex-col justify-center items-center md:flex-col-reverse">
            <div className="md:flex justify-around md:w-full">
                <Image
                src="/akita-intern-circle-logo.png"
                alt="akita-intern"
                width={400}
                height={50}
                className="p-2"
                />
                <div className="flex justify-center">
                    <div
                        onClick={handleInsta}
                        className="cursor-pointer ml-4"
                    >
                        <Image
                            src="/instagram1.png"
                            alt="akita-intern-company"
                            width={50}
                            height={0}
                        />
                    </div>
                    <div
                        onClick={handleX}
                        className="cursor-pointer"
                    >
                        <Image
                            src="/x.png"
                            alt="akita-intern-company"
                            width={50}
                            height={0}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;