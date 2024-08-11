import Image from "next/image";

const Header = () => {
    return (
        <div className="flex justify-start w-screen top-0 z-50 bg-white">
            <Image
            src="/akita-intern-circle-logo.png"
            alt="akita-intern1"
            width={250}
            height={50}
            className="p-2"
            />
        </div>
    );
}
 
export default Header;