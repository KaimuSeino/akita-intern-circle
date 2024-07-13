import Image from "next/image";

const Message = () => {
    return (
        <section className="w-full p-4 flex flex-col justify-center items-center mt-10 bg-[#F4F8F9]">
            <h3 className="text-2xl font-bold text-center">
                秋田インターンサークルなら<br />
                知れる・成長できる
            </h3>
            <p className="text-center text-[16px] my-4 text-slate-600">
                秋田ではポテンシャルを秘めながら、情報の少なさから才能が埋もれてしまっている学生が存在しています。秋田インターンサークルでは、そのポテンシャルを解放し、日本を背負う人材を輩出していきます。
            </p>

            <div className="flex gap-x-4 mt-2">
                <Image
                    src="/left-img.png"
                    alt="akita-intern-left-img"
                    width={175}
                    height={0}
                />
                <Image
                    src="/right-img.png"
                    alt="akita-intern-left-img"
                    width={175}
                    height={0}
                />
            </div>
        </section>
    );
}
 
export default Message;