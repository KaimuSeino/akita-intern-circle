import Image from "next/image";

const Detail = () => {
    return (
        <section className="w-full px-4 flex flex-col justify-center items-center gap-y-[250px] md:gap-y-0">
            <div className="relative">
                <div className="w-screen flex justify-center">
                    <Image
                        src="/event01.jpg"
                        alt="akita-intern-event-01"
                        width={800}
                        height={0}
                        className="mb-10 md:w-[600px] md:mt-20 md:ml-[380px]"
                    />
                </div>
                <div className="absolute w-[95%] top-[80%] left-[4%] md:w-[40%] md:top-[27%]">
                    <div className="border-2 bg-white w-[96%] p-2 rounded-xl">
                        <p className="text-[#FF9900] font-bold text-6xl px-4">01</p>
                        <h3 className="text-3xl p-2 font-bold">
                            学生が企業と<br />
                            連携して<span className="text-[#FFAB40]">イベント</span>を<br />
                            企画・運営
                        </h3>
                        <p className="text-xl mt-4">
                            実際の企業が抱える課題に取り組み、学生の視点からの独自の解決策を考え、企業と協力してイベントを企画・実施。
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="w-screen flex justify-center">
                    <Image
                        src="/event02.jpg"
                        alt="akita-intern-event-02"
                        width={800}
                        height={0}
                        className="my-10 md:w-[600px] md:mt-20 md:mr-[380px]"
                    />
                </div>
                <div className="absolute w-[95%] top-[80%] left-[4%] md:w-[40%] md:left-[58%] md:top-[27%]">
                    <div className="border-2 bg-white w-[96%] p-2 rounded-xl">
                        <p className="text-[#FF9900] font-bold text-6xl px-4">02</p>
                        <h3 className="text-3xl p-2 font-bold">
                            秋田で実践的な学びができる<span className="text-[#FFAB40]">インターン</span>先の紹介
                        </h3>
                        <p className="text-xl mt-4">
                            インターン生を募集している地域を支える様々な企業の情報をご紹介。実際のビジネスの現場での経験を積む貴重な機会となります。サークルメンバー限定のインターンの募集もあります。
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative mt-16">
                <div className="w-screen flex justify-center">
                    <Image
                        src="/event03.jpg"
                        alt="akita-intern-event-03"
                        width={800}
                        height={0}
                        className="my-10 md:w-[600px] md:mt-20 md:ml-[380px]"
                    />
                </div>
                <div className="absolute w-[95%] top-[80%] left-[4%] md:w-[40%] md:top-[27%]">
                    <div className="border-2 bg-white w-[96%] p-2 rounded-xl">
                        <p className="text-[#FF9900] font-bold text-6xl px-4">03</p>
                        <h3 className="text-3xl p-2 font-bold">
                            <span className="text-[#FFAB40]">キャリアアドバイザー</span>との面談実施による<br />
                            就活支援
                        </h3>
                        <p className="text-xl mt-4">
                            秋田インターンサークルの経験を通じて築かれたネットワークを活用し、就活やあなたのやりたいことのサポートをします。学びと成長を様々な形で支援を行います。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Detail;