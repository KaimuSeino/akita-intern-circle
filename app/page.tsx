import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LogoMarquee from "@/components/logo-marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-orange-400 w-full p-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white">秋田の学生へ</h1>
        <div className="w-full z-50">
          <div className="fixed left-0 top-0 flex w-full justify-end">
            <div className="m-4 p-4 bg-red-500 flex justify-center items-center rounded-full w-10 h-10">
              <Navbar />
            </div>
          </div>
        </div>
        <Image
          src="/akita-intern-01.jpg"
          alt="akita-intern-01"
          width={350}
          height={0}
          className="my-10"
        />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-white text-4xl font-bold text-center">
            地方学生のポテンシャルを開放する
          </h2>
          <Button className="font-bold text-white w-[70%] bg-blue-400 h-12">
            相談する
          </Button>
        </div>
      </section>


      <section className="w-full p-8 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold">様々な業界の企業の協力のもと、メンバーば活躍しています。</h3>
        {/* 企業のロゴ */}
        <div className="py-8">
          <LogoMarquee />
        </div>
        {/* 画像挿入 250x250 */}
        <div className="w-[250px] h-[250px] bg-slate-400 my-10">250x250</div>
      </section>

      <section className="w-full p-8 flex flex-col justify-center items-center border-b-2">
        <h3 className="text-2xl font-bold">
          秋田インターンサークルで、<br />
          学生の<span className="text-orange-400">ガクチカ</span>作りと <br />
          情報提供による<span className="text-orange-400">キャリア構築</span>を実現します。
        </h3>
        <p className="py-8 text-xl">
          将来のビジネス界を牽引する可能性を秘めた学生たちに向けて、成長のチャンスやキャリア構築に関する情報を提供します。面談を通じて選考プロセスのサポートや企業の紹介を行います。
        </p>
      </section>

      {/* 秋田インターンサークルでできること */}
      <section className="w-full p-8 flex flex-col justify-center items-center">
        <h3 className="text-4xl pt-4 font-bold">秋田インターンサークルができること</h3>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl py-4 font-semibold">
            <span className="text-orange-400 font-bold text-6xl">01</span>
              イベントの開催
          </h4>
          <p className="text-center">
            企業か抱える課題に<br />
            学生の視点を入れたイベントを<br />
            企画・実施<br />
          </p>
          {/* 画像挿入 250x250 */}
          <div className="w-[350px] h-[250px] bg-slate-400 my-10">350x250</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl py-4 font-semibold">
            <span className="text-orange-400 font-bold text-6xl">02</span>
              インターン先の紹介
          </h4>
          <p className="text-center">
            キャリアのスタート地点として<br />
            最適なインターン先をご紹介<br />
          </p>
          {/* 画像挿入 250x250 */}
          <div className="w-[350px] h-[250px] bg-slate-400 my-10">350x250</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-3xl py-4 font-semibold">
            <span className="text-orange-400 font-bold text-6xl">03</span>
              就活をサポート
          </h4>
          <p className="text-center">
            あなたの学びと成長を最大限<br />
            サポート<br />
          </p>
          {/* 画像挿入 250x250 */}
          <div className="w-[350px] h-[250px] bg-slate-400 my-10">350x250</div>
        </div>
        
      </section>
      
      <section className="w-full p-8 flex flex-col justify-center items-center gap-y-80">
        <div className="relative">
          <div className="w-[350px] h-[250px] bg-slate-400">350x250</div>
          <div className="absolute w-[87%] top-[80%] left-[10%]">
            <div className="border-2 bg-white w-[89%] p-2">
              <p className="text-orange-400 font-bold text-6xl px-4">01</p>
              <h3 className="text-3xl p-2 font-bold">
                学生が企業と連携して<span className="text-orange-400">イベント</span>を企画・運営
              </h3>
              <p>
                実際の企業が抱える課題に取り組み、学生の視点からの独自の解決策を考え、企業と協力してイベントを企画・実施。
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-[350px] h-[250px] bg-slate-400">350x250</div>
          <div className="absolute w-[90%] top-[80%] left-[10%]">
            <div className="border-2 bg-white w-[89%] p-2">
              <p className="text-orange-400 font-bold text-6xl px-4">02</p>
              <h3 className="text-3xl p-2 font-bold">
                秋田で実践的な学びができる<span className="text-orange-400">インターン</span>先の紹介
              </h3>
              <p>
                インターン生を募集している地域を支える様々な企業の情報をご紹介。実際のビジネスの現場での経験を積む貴重な機会となります。サークルメンバー限定のインターンの募集もあります。
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="w-[350px] h-[250px] bg-slate-400">350x250</div>
          <div className="absolute w-[90%] top-[80%] left-[10%]">
            <div className="border-2 bg-white w-[89%] p-2">
              <p className="text-orange-400 font-bold text-6xl px-4">03</p>
              <h3 className="text-3xl p-2 font-bold">
                <span className="text-orange-400">キャリアアドバイザー</span>面談による就活支援
              </h3>
              <p>
                秋田インターンサークルの経験を通じて築かれたネットワークを活用し、就活やあなたのやりたいことのサポートをします。学びと成長を様々な形で支援を行います。
              </p>
            </div>
          </div>
        </div>
        
      </section>

      <section className="w-full p-8 flex flex-col justify-center items-center mt-[340px]">
        <h3 className="text-xl font-bold">スキルアップと活動を支援</h3>
        <h4 className="text-center font-bold text-2xl">
          学生インターンサークルの <br />
          サポートコンテンツ
        </h4>
        <div className="mt-8 flex items-center gap-x-2 border-b-2 border-dashed">
          <div className="font-bold text-xl flex flex-col gap-y-6">
            <h4>
              <span className="text-orange-800 text-3xl">学べる</span>コンテンツ
            </h4>
            <p className="font-normal text-sm">
              <Link 
                href="#"
                className="underline mr-4"
              >
                詳しく見る
              </Link>
              今後配信予定
            </p>
            
          </div>
          <div className="w-[100px] h-[70px] bg-slate-400 my-10">100x70</div>
        </div>

        <div className="mt-8 flex items-center gap-x-7 border-b-2 border-dashed">
          <div className="font-bold text-xl flex flex-col gap-y-6">
            <h4>
              <span className="text-orange-800 text-3xl">交流できる</span> <br />
              コンテンツ
            </h4>
            <p className="font-normal text-sm">
              <Link 
                href="#"
                className="underline mr-4"
              >
                詳しく見る
              </Link>
              今後配信予定
            </p>
            
          </div>
          <div className="w-[100px] h-[70px] bg-slate-400 my-10">100x70</div>
        </div>
      </section>

      <section className="w-full p-8 flex flex-col justify-center items-center mt-10">
        <h3 className="text-xl font-bold text-center">
          秋田インターンサークルから、<br />
          知れる・成長できる
        </h3>
        <p className="text-center text-[16px] my-4 text-slate-600">
          秋田ではポテンシャルを秘めながら、情報の少なさから才能が埋もれてしまっている学生が存在しています。秋田インターンサークルでは、そのポテンシャルを解放し、日本を背負う人材を輩出していきます。
        </p>

        <div className="flex gap-x-4 mt-2">
          <div className="w-[150px] h-[50px] bg-slate-400">150x50</div>
          <div className="w-[150px] h-[50px] bg-slate-400">150x50</div>
        </div>
      </section>
      
      <section className="w-full p-8 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-center">
          様々な業界の企業と協力して<br />
          秋田インターンサークルは<br />
          活動しています。
        </h3>
        {/* 企業のロゴ */}
        <div className="py-8">
          <div className="w-screen bg-slate-300">
            <div className="w-[50px] h-[50px] bg-slate-400">50x50</div>
            <div className="w-[50px] h-[50px] bg-slate-400">50x50</div>
          </div>
        </div>
      </section>

      <section className="bg-orange-400 w-full p-8 flex flex-col justify-center gap-4 items-center">
        <h4 className="text-xl font-bold text-white text-center">
          秋田インターンサークルに<br />
          関してご不明な点ございましたら<br />
          お気軽にお問い合わせください
        </h4>
        {/* 画像挿入 250x250 */}
        <div className="w-[80%] bg-white my-10 flex flex-col justify-center items-center">
          <div className="m-4 p-14 bg-orange-500 flex justify-center items-center rounded-full w-10 h-10">
            <div className="w-[50px] h-[50px] bg-slate-400"> 50x50 </div>
          </div>

          <h4 className="text-3xl font-bold">学生の方へ</h4>

          <Button className="font-bold text-white w-[70%] bg-blue-400 h-12 my-4">
            相談する
          </Button>
        </div>

        <div className="w-[80%] bg-white my-10 flex flex-col justify-center items-center">
          <div className="m-4 p-14 bg-orange-500 flex justify-center items-center rounded-full w-10 h-10">
            <div className="w-[50px] h-[50px] bg-slate-400"> 50x50 </div>
          </div>

          <h4 className="text-3xl font-bold">企業の方へ</h4>

          <Button className="font-bold text-white w-[70%] bg-blue-400 h-12 my-4">
            お問い合わせ
          </Button>
        </div>
      </section>

      <section className="w-full p-8 flex flex-col justify-center items-center">
        <div className="border-b-2 w-screen flex flex-col items-center gap-y-2 p-4">
          <p>ホーム</p>
          <p>私たちについて</p>
          <p>サービス</p>
          <p>サポートコンテンツ</p>
          <p>お問い合わせ</p>
        </div>
        <div>
          <div className="w-[350px] h-[50px] bg-slate-400 my-4">250x250</div>
          <div className="flex">
            <div className="w-[50px] h-[50px] bg-slate-400">50x50</div>
            <div className="w-[50px] h-[50px] bg-slate-400">50x50</div>
          </div>
        </div>
        <p className="mt-4 text-sm font-sans text-slate-500">&copy;All Rights Reserved</p>
      </section>
      
    </main>
  );
}
