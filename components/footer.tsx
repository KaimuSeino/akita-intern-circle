import Image from "next/image";

const Footer = () => {
    return (
        <section className="w-full p-4 flex flex-col justify-center items-center md:flex-col-reverse">
            <div className="border-b-2 w-screen flex flex-col items-center gap-y-2 p-4 md:flex-row md:justify-around md:border-none">
                <p>ホーム</p>
                <p>私たちについて</p>
                <p>サービス</p>
                <p>サポートコンテンツ</p>
                <p>お問い合わせ</p>
            </div>
            <div className="md:flex flex-col justify-start md:w-full">
                <Image
                src="/akita-intern-circle-logo.png"
                alt="akita-intern"
                width={400}
                height={50}
                className="p-2"
                />
                <div className="flex">
                    <Image
                    src="/instagram1.png"
                    alt="akita-intern-company"
                    width={50}
                    height={0}
                    />
                    <Image
                    src="/x.png"
                    alt="akita-intern-company"
                    width={50}
                    height={0}
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Footer;