import Image from "next/image";
import LogoMarquee from "@/components/logo-marquee";
import Main from "@/components/main";
import CanDo from "@/components/can-do";
import Detail from "@/components/detail";
import Support from "@/components/support";
import Message from "@/components/message";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Career from "@/components/career";
import Company from "@/components/company";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-start w-screen top-0 z-50 bg-white">
          <Image
            src="/akita-intern-circle-logo.png"
            alt="akita-intern1"
            width={250}
            height={50}
            className="p-2"
          />
      </div>
      {/* メイン */}
      <Main />

      {/* 会社一覧 */}
      <Company />

      {/* キャリア */}
      <Career />

      {/* 秋田インターンサークルでできること */}
      <CanDo />
      
      {/* 活動内容 */}
      <Detail />

      {/* サポートコンテンツ */}
      <Support />

      {/* メッセージ */}
      <Message />
      
      <section className="w-full p-4 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold text-center mt-4">
          様々な業界の企業と協力して<br />
          秋田インターンサークルは<br className="md:hidden" />
          活動しています。
        </h3>
        {/* 企業のロゴ */}
        <div className="py-4 w-screen">
          <LogoMarquee />
        </div>
      </section>

      {/* お問い合わせ */}
      <Contact />

      {/* フッター */}
      <Footer />

      <p className="mt-4 p-4 text-sm font-sans text-slate-500">&copy;2023 Akita Intern Circle</p>
    </main>
  );
}
