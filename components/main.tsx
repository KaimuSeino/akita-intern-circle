import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Main = () => {
    return ( 
        <section className="bg-[#FFAB40] w-full p-4 flex flex-col md:flex-row justify-center items-center">

            <div className="flex flex-col justify-center items-center md:ml-20 w-full md:p-4">
                <h1 className="text-white text-5xl font-bold text-center">
                    秋田の学生のポテンシャルを開放する
                </h1>
                <h2 className="text-white text-xl font-semibold text-center mt-4">
                    就活を終えた先輩が自己分析やES添削など<br />就活を徹底サポートする就活支援団体
                </h2>
                <Button className="font-bold text-2xl text-white w-[70%] bg-blue-400 hover:bg-blue-500 h-12 mt-6 md:grid-cols-1">
                    <Link href="https://t.co/jbiLUdpbcq">
                        相談する
                    </Link>
                </Button>
            </div>

            <div className="w-screen flex justify-center md:mr-24">
                <Image
                    src="/akita-intern-01.jpg"
                    alt="akita-intern-01"
                    width={800}
                    height={0}
                    className="my-10"
                />
            </div>

        </section>
    );
}
 
export default Main;