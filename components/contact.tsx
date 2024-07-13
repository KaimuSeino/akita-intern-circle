import Image from "next/image";
import { Button } from "./ui/button";

const Contact = () => {
    return (
        <section className="bg-[#FFAB40] w-full p-4 flex flex-col justify-center gap-4 items-center">
        <h4 className="text-xl font-bold text-white text-center mt-4">
          秋田インターンサークルに<br className="md:hidden" />
          関してご不明な点ございましたら<br />
          お気軽にお問い合わせください
        </h4>
        <div className="w-full p-4 flex flex-col justify-center gap-4 items-center md:flex-row">
          <div className="w-[80%] bg-white my-2 flex flex-col justify-center items-center py-4 md:w-[40%]">
            <div className="m-4 p-2 bg-[#FFAB40] flex justify-center items-center rounded-full w-20 h-20">
              <Image
                src="/white-img02.png"
                alt="akita-intern-student"
                width={50}
                height={50}
              />
            </div>

            <h4 className="text-3xl font-bold">学生の方へ</h4>

            <Button className="font-bold text-xl text-white w-[70%] bg-blue-400 h-12 my-4">
              相談する
            </Button>
          </div>

          <div className="w-[80%] bg-white my-2 flex flex-col justify-center items-center py-4 md:w-[40%]">
            <div className="m-4 p-2 bg-[#FFAB40] flex justify-center items-center rounded-full w-20 h-20">
              <Image
                src="/white-img03.png"
                alt="akita-intern-company"
                width={30}
                height={50}
              />
            </div>

            <h4 className="text-3xl font-bold">企業の方へ</h4>

            <Button className="font-bold text-xl text-white w-[70%] bg-blue-400 h-12 my-4">
              お問い合わせ
            </Button>
          </div>
        </div>
        
      </section>
    );
}
 
export default Contact;