import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Emergency from "@/components/emergency";
import References from "@/components/references";
import Footer from "@/components/footer";
import Stats from "@/components/stats";
import ContactForm from "@/components/contact-form";
import ScrollVelocity from "@/components/scroll-velocity";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import Masonry from "@/components/Masonary";
import FlowingMenu from "@/components/Flowingmenu";
import Image from "next/image";
import HeroSection from "@/components/herosection";
import { PhoneCall } from "lucide-react";
import WhyChooseUs from "@/components/why-choose-us";
import Pricing from "@/components/pricing";
import HeroS from "@/components/heros";
import AISection from "@/components/aisection";

const data = [
  { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
  { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
  { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
  { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
  { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
  { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
  { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
  { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
  { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
  { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
];

const demoItems = [
  {
    link: "#",
    text: "Florida",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Washington D.C.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Tokyo",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Mumbai",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <Image
        src="/dora.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute -top-[360px] md:top-0 left-0 w-full h-full object-cover z-0"
      />
      <Header />
      <HeroS />
      <AISection />
      <Services />
      <References />
      <Pricing />
      <Emergency />
      <ContactForm />
      <Footer />
    </main>
  );
}
