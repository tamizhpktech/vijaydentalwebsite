import Link from "next/link";
import Image from "next/image";
import { Icon } from "./DentalSite";
import { CLINIC } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/asset/logo8.png" alt="Dr. Vijay's Dental Clinic Logo" width={80} height={78} className="brightness-0 invert" />
              <div>
                <div className="text-xs text-gray-400">Dr. Vijay&apos;s</div>
                <div className="text-sm font-extrabold">DENTAL CLINIC</div>
                <div className="text-[10px] text-gray-500">Expert Care with Precision</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">Advanced dentistry. Personalised care.<br />Beautiful smiles.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2"><Icon name="phone" className="h-4 w-4" /> {CLINIC.phone[0]}</p>

              <p className="flex items-start gap-2"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
                {CLINIC.address.line1} {CLINIC.address.line2}<br />{CLINIC.address.city} {CLINIC.address.state}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">Clinic Timings</h4>
            <p className="text-sm text-gray-400">Mon-Sat: 5 PM - 9 PM<br />Sunday: By appointment only</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Dr. Vijay&apos;s Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
