import LogoMarquee from "@/components/logo-marquee";

const Company = () => {
    return (
        <section className="w-full p-4 flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold text-center mt-4 md:text-2xl">
                様々な業界の企業の協力のもと <br className="md:hidden" />
                メンバーは活躍しています。
            </h3>
            {/* 企業のロゴ */}
            <div className="pt-8 w-screen">
                <LogoMarquee />
            </div>
        </section>
    );
}
 
export default Company;