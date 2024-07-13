import Image from "next/image";
import { Button } from "./ui/button";

const Main = () => {
    return ( 
        <section className="bg-[#FFAB40] w-full p-4 flex flex-col md:flex-row justify-center items-center">

            <div className="flex flex-col justify-center items-center md:ml-20 w-full md:p-4">
            <h1 className="text-5xl font-bold text-white mt-6 mb-4 md:text-7xl">秋田の学生へ</h1>
            <h2 className="text-white text-4xl font-bold text-center">
                地方学生のポテンシャルを開放する
            </h2>
            <Button className="font-bold text-2xl text-white w-[70%] bg-blue-400 h-12 mt-6 md:grid-cols-1">
                相談する
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