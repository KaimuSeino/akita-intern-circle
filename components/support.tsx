import Image from "next/image";

const Support = () => {
    return (
        <section className="w-full py-4 flex flex-col justify-center items-center mt-[340px] md:mt-[40px]">
            <h3 className="text-2xl font-bold">スキルアップと活動を支援</h3>
            <h4 className="text-center font-bold text-3xl mt-4">
                学生インターンサークルの<br className="md:hidden" />
                サポートコンテンツ
            </h4>
            <div className="md:flex gap-x-20">
                <div className="mt-8 flex items-center gap-x-2 border-b-2 border-dashed md:border-none md:bg-[#F4F8F9] md:p-4 md:rounded-xl">
                    <div className="font-bold text-xl flex flex-col gap-y-6">
                        <h4>
                            <span className="text-[#B45F06] text-3xl">学べる</span>コンテンツ
                        </h4>
                        <p className="font-normal text-sm flex items-center justify-center">
                            今後配信予定
                        </p>
                    </div>
                    {/* 画像挿入 */}
                    <Image
                        src="/learn.png"
                        alt="akita-intern-learn"
                        width={120}
                        height={0}
                        className="my-4"
                    />
                </div>

                <div className="mt-8 flex items-center gap-x-12 border-b-2 border-dashed md:border-none md:bg-[#F4F8F9] md:p-4 md:rounded-xl">
                    <div className="font-bold text-xl flex flex-col gap-y-6">
                    <h4>
                        <span className="text-[#B45F06] text-3xl">交流できる</span><br />
                        コンテンツ
                    </h4>
                    <p className="font-normal text-sm flex items-center justify-center">
                        今後配信予定
                    </p>
                    
                    </div>
                    {/* 画像挿入 */}
                    <Image
                        src="/net.png"
                        alt="akita-intern-learn"
                        width={120}
                        height={0}
                        className="my-4"
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Support;