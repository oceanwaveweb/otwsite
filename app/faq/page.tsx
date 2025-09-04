import Faq from "@/components/emergency";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function FAQPage() {
  return (
    <div className="relative flex md:flex-col items-center justify-center py-16 mt-[40px] bg-white">
      <Header />
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Faq />

      <Footer />
    </div>
  );
}
