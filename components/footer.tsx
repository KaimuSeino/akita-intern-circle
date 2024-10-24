import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
                    <Link href="https://www.instagram.com/akita_intern_/">
                        <Image
                            src="/instagram1.png"
                            alt="akita-intern-company"
                            width={50}
                            height={0}
                        />
                    </Link>
                    <Link href="https://x.com/akita_intern_">
                        <Image
                            src="/x.png"
                            alt="akita-intern-company"
                            width={50}
                            height={0}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;