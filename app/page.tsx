import LogoMarquee from "@/components/logo-marquee";
import Main from "@/components/main";
import CanDo from "@/components/can-do";
import Detail from "@/components/detail";
import Support from "@/components/support";
import Message from "@/components/message";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Career from "@/components/career";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* ヘッダー */}
      <Header />

      {/* メイン */}
      <Main />

      {/* キャリア */}
      <Career />

      {/* 企業ロゴ */}
      <div className="pb-2 w-screen">
          <LogoMarquee />
      </div>

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
