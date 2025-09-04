"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="container-custom z-40 py-20">
      <div className="rounded-3xl z-40 p-8 md:p-12 max-w-4xl mx-auto 
        bg-gradient-to-br from-white/20 via-white/10 to-transparent
  backdrop-blur-xl border-white/10 shadow-lg text-white">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6 z-40"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center z-40">FAQ</h2>

          <Accordion type="single" collapsible className="w-full text-left z-40">
            <AccordionItem value="item-1" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                Why would I need a courier service?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                It would be a good idea to use OTW services when you need
                something delivered right away. With other options such as postal
                delivery and overnight or express delivery, you don't have the
                option of sending something to the recipient same-day. There may
                be times that you need something delivered to meet a deadline
                that just won't make it any other way. There is no other option
                that can get shipments out as quickly as OTW can.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                What can you deliver?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                From retail and food orders to pharmaceuticals and palletized
                materials, OTW has the same day delivery services for it all. We
                have experienced drivers in delivering all sorts of packages,
                and they will make sure your parcels are delivered safely,
                reliably, and most of all, on schedule!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                How can I order OTW services?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                You can call us and schedule a pickup and delivery at{" "}
                <a href="tel:7868231032" className="underline text-[#51ae16] z-40">
                  (786) 823-1032
                </a>{" "}
                or fill out our request form and we will contact you as soon as
                possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                How fast can you deliver my package?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                With our same day delivery service, you'll have several delivery
                options at your disposal. Same day deliveries are usually made
                within a standard 8 hours time frame, but we also offer a faster
                4-hour delivery option, a 2-hour delivery option, and even a
                1-hour delivery option for those urgent needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                What if I bought a bulk deal & have hours at the end of the
                month?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                The leftover hours will be rolled onto the following month. Your
                hours are for you to use until they run out!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="z-40">
              <AccordionTrigger className="text-lg font-medium text-white z-40">
                What if I need a service that is not listed?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base opacity-90 z-40">
                Feel free to call us at{" "}
                <a href="tel:7868231032" className="underline text-[#51ae16] z-40">
                  (786) 823-1032
                </a>
                , and we will discuss your specific needs and then we can create
                a custom package that will meet your expectations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
