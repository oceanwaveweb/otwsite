"use client"

import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 relative"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT with glassmorphism */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Why Choose <span className="text-green-300">OTW?</span>
          </h2>
          <p className="text-white/80 mb-10 max-w-xl">
            OTW offers four-hour, two-hour and same-day delivery. 
            We promise we'll be on time – every time!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-200 border-b-2 border-green-400 inline-block">
                FAST DELIVERY
              </h3>
              <p className="text-white/80 mt-2 max-w-md">
                We continue to provide reliable service no matter what the circumstances. 
                Let OTW take care of your delivery needs and put your mind at ease!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-200 border-b-2 border-green-400 inline-block">
                AVAILABLE 24/7
              </h3>
              <p className="text-white/80 mt-2 max-w-md">
                You will always be valued for being a customer. We promise to woo you with our courteous and reliable 
                customer service. We are there when you need our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-200 border-b-2 border-green-400 inline-block">
                AFFORDABLE PRICING
              </h3>
              <p className="text-white/80 mt-2 max-w-md">
                We don't gouge you for fast reliable service. With rates starting as low as $20, 
                we work with you to make sure you stay on budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-200 border-b-2 border-green-400 inline-block">
                SECURED SERVICES
              </h3>
              <p className="text-white/80 mt-2 max-w-md">
                When you use OTW, you can take comfort in knowing that your items are in safe hands. 
                We treat your precious cargo as if it is our own.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE with glassy frame */}
        <div className="relative">
          {/* Glassy background card */}
          <div className="absolute top-0 right-0 w-full h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg translate-x-6 translate-y-6"></div>
          
          {/* Main Image */}
          <Image
            src="https://images.unsplash.com/photo-1583228858294-6745cb25969e?q=80&w=870&auto=format&fit=crop"
            alt="Why Choose OTW"
            width={600}
            height={400}
            className="relative rounded-lg shadow-2xl border border-white/20"
          />

          {/* Green Accent block */}
          <div className="absolute top-1/2 right-[-20px] w-6 h-12 bg-green-400/80 rounded shadow-lg"></div>
        </div>

      </div>
    </section>
  )
}
