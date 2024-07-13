import Image from "next/image";

const CanDo = () => {
    return (
        <section className="w-full px-4 pt-4 flex flex-col justify-center items-center bg-[#F7F7F8]">
            <h3 className="text-4xl pt-4 font-bold text-center">秋田インターンサークルができること</h3>

            <div className="md:flex items-start">
                <div className="flex flex-col items-center justify-center md:p-2">
                    <h4 className="text-3xl py-4 font-semibold flex items-center md:flex-col">
                    <span className="text-[#FF9900] font-bold text-6xl mr-4">01</span>
                        イベントの開催
                    </h4>
                    <p className="text-center text-xl">
                        企業か抱える課題に<br />
                        学生の視点を入れたイベントを<br />
                        企画・実施<br />
                    </p>
                    {/* 画像挿入 250x250 */}
                    <Image
                        src="/intern01.png"
                        alt="akita-intern-01"
                        width={350}
                        height={0}
                        className="my-10"
                    />
                </div>

                <div className="flex flex-col items-center justify-center md:p-2">
                    <h4 className="text-3xl py-4 font-semibold flex items-center md:flex-col">
                    <span className="text-[#FF9900] font-bold text-6xl mr-2">02</span>
                        インターン先の紹介
                    </h4>
                    <p className="text-center text-xl">
                        キャリアのスタート地点として<br />
                        最適なインターン先をご紹介<br />
                    </p>
                    {/* 画像挿入 250x250 */}
                    <Image
                        src="/intern02.png"
                        alt="akita-intern-02"
                        width={350}
                        height={0}
                        className="my-10"
                    />
                </div>

                <div className="flex flex-col items-center justify-center md:p-2">
                    <h4 className="text-3xl py-4 font-semibold flex items-center md:flex-col">
                    <span className="text-[#FF9900] font-bold text-6xl mr-4">03</span>
                        就活をサポート
                    </h4>
                    <p className="text-center text-xl">
                        あなたの学びと成長を最大限<br />
                        サポート<br />
                    </p>
                    {/* 画像挿入 250x250 */}
                    <Image
                        src="/intern03.png"
                        alt="akita-intern-03"
                        width={320}
                        height={0}
                        className="my-10"
                    />
                </div>
            </div>
        </section>
    );
}
 
export default CanDo;