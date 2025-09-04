"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Clock, DollarSign, Shield, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Booking from "@/components/booking";
import Footer from "@/components/footer";

const WhyChooseUs = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${rate}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Truck,
      title: "FAST DELIVERY",
      description:
        "We continue to provide reliable service no matter what the circumstances. Let OTW DELIVERY & DISTRIBUTION take care of your delivery needs and put your mind at ease!",
    },
    {
      icon: Clock,
      title: "AVAILABLE 24/7",
      description:
        "You will always be valued for being a customer. We promise to help you with our courteous and reliable customer service. We are there when you need our services.",
    },
    {
      icon: DollarSign,
      title: "AFFORDABLE PRICING",
      description:
        "We don't gouge you for fast reliable service. With OTW DELIVERY & DISTRIBUTION, there's no membership fee or long-term contract. We make sure you stay on budget.",
    },
    {
      icon: Shield,
      title: "SECURED SERVICES",
      description:
        "When choosing OTW DELIVERY & DISTRIBUTION, you can rest assured in knowing that your items are in safe hands. We treat your packages as our own precious cargo.",
    },
  ];

  const benefits = [
    "Same-day delivery options",
    "Real-time tracking",
    "Professional drivers",
    "Insured packages",
    "Flexible scheduling",
    "Emergency delivery service",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[560px] md:h-[460px] px-6 md:px-16  overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            ref={imageRef}
            src="/background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10  max-w-[1400px] mx-auto pt-16 flex items-center">
          <div className="OTW DELIVERY & DISTRIBUTION-container">
            <div className="max-w-3xl ">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 uppercase leading-tight">
                Why Choose
                <span className="text-OTW DELIVERY & DISTRIBUTIONGreen block">Us?</span>
              </h1>

              <p className="text-xl md:text-2xl text-white mb-6 font-medium">
                OTW DELIVERY & DISTRIBUTION offers four-hour, two-hour and same-day delivery.
              </p>
              <p className="text-lg text-white mb-12 italic">
                We promise we'll be on time - every time!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30 px-6 md:px-16  max-w-[1400px] mx-auto mx-auto">
        <div className="OTW DELIVERY & DISTRIBUTION-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
              Our Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes OTW DELIVERY & DISTRIBUTION the preferred choice for delivery services
              across South Florida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="OTW DELIVERY & DISTRIBUTION-card p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-lg flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="bg-primary p-8 md:p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 uppercase">
                  Additional Benefits
                </h3>
                <p className="text-xl text-primary-foreground/90 mb-3">
                  Experience the difference with our comprehensive service
                  offerings
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                      <span className="text-primary-foreground font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="bg-primary-foreground/10 p-8 rounded-xl backdrop-blur-sm">
                  <h4 className="text-2xl font-bold text-primary-foreground mb-4 uppercase">
                    Ready to Experience OTW DELIVERY & DISTRIBUTION?
                  </h4>
                  <p className="text-primary-foreground/90 mb-6">
                    Join thousands of satisfied customers who trust OTW DELIVERY & DISTRIBUTION for
                    their delivery needs
                  </p>
                  <Booking />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
