"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AISection() {
  useEffect(() => {
    let killFns: Array<() => void> = [];

    const initFadeInText = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const blocks = document.querySelectorAll<HTMLElement>(".fade-in-text");

      blocks.forEach((block) => {
        const paragraph = block.querySelector<HTMLParagraphElement>("p");
        if (!paragraph) return;

        // Prevent double-wrapping in React Strict Mode/dev
        if (paragraph.dataset.wrapped === "true") return;
        paragraph.dataset.wrapped = "true";

        // Wrap words in spans (preserves spaces)
        const walker = document.createTreeWalker(
          paragraph,
          NodeFilter.SHOW_TEXT,
          null
        );
        const textNodes: Text[] = [];
        while (walker.nextNode()) {
          const node = walker.currentNode as Text;
          if (node.nodeValue && node.nodeValue.trim() !== "")
            textNodes.push(node);
        }

        textNodes.forEach((node) => {
          const frag = document.createDocumentFragment();
          const parts = node.nodeValue!.match(/(\s+|\S+)/g) || [];
          parts.forEach((token) => {
            if (token.trim() === "") {
              frag.appendChild(document.createTextNode(token));
            } else {
              const span = document.createElement("span");
              span.className = "fade-word";
              span.textContent = token;
              frag.appendChild(span);
            }
          });
          node.parentNode?.replaceChild(frag, node);
        });

        // Include inline emphasis too
        const targets = block.querySelectorAll<HTMLElement>(
          "span.fade-word, b, i, strong, em"
        );

        // Initial state
        gsap.set(targets, { opacity: 0.25 });
        // Ensure we can clean up this set on unmount
        killFns.push(() => gsap.set(targets, { clearProps: "opacity" }));

        // If no scroll, play once; otherwise scrub with scroll
        const hasScroll =
          document.documentElement.scrollHeight > window.innerHeight + 4;

        if (!hasScroll) {
          const tween = gsap.to(targets, {
            opacity: 1,
            duration: 0.9,
            stagger: 0.03,
            ease: "none",
            delay: 0.05,
          });
          killFns.push(() => tween.kill());
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: block,
              start: "top 60%",
              end: "bottom 20%",
              scrub: true,
              // markers: true, // uncomment to debug
            },
          });
          tl.to(targets, {
            opacity: 1,
            duration: 0.2,
            stagger: 0.05,
            ease: "none",
          });
          killFns.push(() => {
            tl.scrollTrigger?.kill();
            tl.kill();
          });
        }

        // Refresh after building triggers (useful if content height changes)
        ScrollTrigger.refresh();
      });
    };

    initFadeInText();

    return () => {
      // kill only what we created here
      killFns.forEach((k) => k());
    };
  }, []);

  return (
    <section className="py-24 hidden md:block md:py-32 relative">
      <Image
        src="/dora.png"
        alt="Background"
        width={100}
        height={100}
        className="absolute bottom-0 md:-bottom-[550px] -right-24 w-full h-auto object-cover z-1"
      />
      <div className="mx-auto max-w-4xl relative px-6">
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold italic text-[#2BB32A] tracking-tight">
            OTW - Click. Pay. Delivered.
          </h2>
          {/* optional subtext */}
          <p className="mt-3 text-white/70">
            Providing the best courier services across Miami Dade and Broward
            County
          </p>
        </header>

        {/* Animated paragraph block */}
        <div className="fade-in-text text-lg leading-relaxed">
          <p>
            <strong>
              The most reliable service is{" "}
              <em className="text-[#2BB32A]">otwgo.com</em>.
            </strong>
            <br />
            <br />
            OTW DELIVERY & DISTRIBUTION is built for the heartbeat of Miami-Dade and Broward County.
            Whether you're shipping from a storefront in Little Havana, a
            warehouse near Hialeah, or a boutique in Downtown Fort Lauderdale,
            we’ve got you covered.
            <br />
            <br />
            We’ve reimagined local logistics. Combining real-time tracking,
            smart routing, and a deep understanding of South Florida’s business
            pulse. From same-day deliveries in Brickell to scheduled pickups in
            Miramar, we move with the rhythm of your operation.
            <br />
            <br />
            This isn’t just shipping. It’s a smarter, faster, more local way to
            connect.
          </p>
        </div>
      </div>
    </section>
  );
}
