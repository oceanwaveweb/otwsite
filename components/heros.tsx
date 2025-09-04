"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowBigLeft, ArrowRightIcon } from "lucide-react";
import HomeBooking from "./homebooking";

export default function HeroS() {
  const dynamicWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = ["Courier", "Track", "Order"];
    const typingSpeed = 175;
    const deletingSpeed = 100;
    const holdTime = 3000;
    const initialPause = 2000;

    let wordIndex = 0;

    function typeWord(word: string, index: number, callback: () => void) {
      if (index < word.length && dynamicWordRef.current) {
        dynamicWordRef.current.textContent += word[index];
        setTimeout(() => typeWord(word, index + 1, callback), typingSpeed);
      } else {
        setTimeout(callback, holdTime);
      }
    }

    function deleteWord(callback: () => void) {
      if (dynamicWordRef.current) {
        const text = dynamicWordRef.current.textContent;
        if (text && text.length > 0) {
          dynamicWordRef.current.textContent = text.slice(0, -1);
          setTimeout(() => deleteWord(callback), deletingSpeed);
        } else {
          callback();
        }
      }
    }

    function cycleWords() {
      deleteWord(() => {
        wordIndex = (wordIndex + 1) % words.length;
        if (dynamicWordRef.current) {
          dynamicWordRef.current.textContent = "";
          typeWord(words[wordIndex], 0, () => {
            deleteWord(() => {
              wordIndex = (wordIndex + 1) % words.length;
              cycleWords();
            });
          });
        }
      });
    }

    const timer = setTimeout(() => {
      cycleWords();
    }, initialPause);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-screen max-w-7xl mx-auto md:max-h-[1000px] md:h-screen text-white flex items-center justify-center">
      <div className="absolute top-0 md:-top-[700px] right-0 left-0 z-10">
        <Image
          src="dora.svg"
          width={100}
          height={100}
          alt="background"
          className="h-[600px] md:h-auto w-[600px] md:w-full"
        />
      </div>
      {/* Content */}
      <div className="relative pt-32 w-full z-10 h-full flex flex-col md:flex-row mx-auto px-4 text-center gap-6">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center items-left text-left">
          <h1 className="text-5xl md:text-7xl font-semibold  -900 mb-6 leading-tight">
            <span className="text-white relative">
              <Image
                src="Vector 4.png"
                width={100}
                height={100}
                alt="background"
                className="w-[300px] h-[80px] md:w-full md:h-full absolute top-0 -left-2"
              />
              Deliver{" "}
            </span>{" "}
            the <br className="hidden md:block" />
            packages with OTW
          </h1>
          <p className="text-xl md:text-2xl  -600 mb-8 max-w-3xl mx-auto leading-relaxed capitalize">
            providing the best delivery & distribution services across Miami Dade and Broward
            County
          </p>
          <Link
            href="/services"
            className=" px-3 flex flex-row gap-3 justify-center items-center w-[200px] md:w-[250px] py-4 mr-6 md:px-6 md:py-4 bg-[#2BB32A] hover:bg-[#4bab5a] text-white font-semibold rounded transform transition-all duration-200 text-md md:text-lg"
          >
            Get Started <ArrowRightIcon />
          </Link>
        </div>
        <div className="w-full pt-6 relative md:w-[50%] h-[50%] md:h-full ">
          <div className="z-20 md:w-[80%]">
            <HomeBooking />
          </div>

          <div className="absolute bottom-[130px] md:bottom-[40px] -z-10 -right-[130px] w-[200px] h-[200px] md:h-[400px] md:w-[400px] rounded-full bg-[#2BB32A]"></div>
        </div>
      </div>
    </section>
  );
}
