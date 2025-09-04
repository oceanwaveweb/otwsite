import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh+10rem)] flex items-center justify-center text-center text-white overflow-hidden ">
      <div className="relative z-10 flex flex-col items-center p-4">
        <Image
          src="/logo.avif"
          alt="OTW Logo"
          width={300}
          height={300}
          className="h-auto w-48 sm:w-64 md:w-80 lg:w-96 mb-6"
        />

        <h1 className="text-2xl text-[#6de620] uppercase font-bold mt-4 mb-4">
          providing the best courier services across Miami Dade and Broward
          County
        </h1>
      </div>
    </section>
  );
}
