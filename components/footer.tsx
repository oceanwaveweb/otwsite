import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative         bg-gradient-to-br from-white/20 via-white/10 to-transparent
  backdrop-blur-xl border-white/10 shadow-lg text-white"
    >
      {/* Content */}
      <div className="relative z-10 py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.avif" alt="OTW Logo" width={40} height={40} />
            <h3 className="ml-3 text-white font-bold tracking-wider text-sm">
              TERMS & CONDITIONS
            </h3>
          </div>

          <div className="border border-white/30 rounded-lg p-4 space-y-4 text-sm leading-relaxed max-w-3xl">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="font-bold uppercase">
                  LARGE OR UNUSUAL SIZE SHIPMENTS:
                </span>{" "}
                We can gladly accommodate unusual size and shipment types.
              </li>
              <li>
                <span className="font-bold uppercase">PACKAGING:</span> In order
                to ensure prompt service, please have items properly packaged,
                addressed and ready for delivery.
              </li>
              <li>
                <span className="font-bold uppercase">WAIT TIME:</span> $5.50
                per minute after 5 minutes.
              </li>
              <li>
                <span className="font-bold uppercase">PAYMENT TERMS:</span>{" "}
                <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                  <li>Terms are net 10 days from statement date.</li>
                  <li>Statements mailed twice each month.</li>
                  <li>
                    Charges (1st–15th) past due on 15th of following month.
                  </li>
                  <li>
                    Charges (16th–end) past due at end of following month.
                  </li>
                  <li>Monthly Billing and Electronic Statements available.</li>
                  <li>Credit cards, checks and ACH payments accepted.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold uppercase">CANCELLED ORDERS:</span>{" "}
                There may be a charge for any delivery cancelled after dispatch
                of a driver.
              </li>
              <li>
                <span className="font-bold uppercase">LIABILITY:</span> Unless
                otherwise stated in writing, our liability for loss or damage to
                any delivery is limited to $200.00.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between text-sm text-right items-end">
          <div>
            <h3 className="font-bold tracking-wider text-sm text-white mb-2">
              CONTACT
            </h3>
            <p>(786) 823-1032</p>
            <p className="mb-2">otwdelivered@gmail.com</p>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:opacity-80"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <div className="mt-8 space-y-1 pb-20 md:pb-16 text-right relative">
            <p>Available 24 hours a day, 7 days a week</p>
            <p>Serving Miami Dade and Broward County</p>
            <p>
              <Link
                href="https://oceanwaveweb.com/"
                className="absolute bottom-0 md:-bottom-6 right-0 text-otwGreen hover:underline uppercase"
              >
                <Image
                  src="/logodark.png"
                  alt="Ocean Wave Web Logo"
                  width={100}
                  height={100}
                  className="inline-block h-auto w-32"
                />
              </Link>
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/accessibility"
                className="text-white hover:underline uppercase opacity-70"
              >
                Accessibility Statement
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
