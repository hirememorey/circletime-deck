import { MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Slide3() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B6B]/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4ECDC4]/5 rounded-tr-full -z-10 print:hidden"></div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-[#2B2D42]">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-6 text-center print:text-3xl">
        Simple Access, Sustainable Support{" "}
        <span className="text-[#FF6B6B] relative">
          (Help Us Shape This!)
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FF6B6B]/30 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
        {/* Section 1: Getting Coverage is Easy */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-[#4ECDC4]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4ECDC4]/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-[#2B2D42] mb-6 relative">Getting Coverage is Easy</h2>

          <div className="space-y-6 relative">
            <div className="flex items-start gap-4">
              <div className="bg-[#4ECDC4] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Request</h3>
                <p className="text-[#2B2D42]/80">
                  Let us know your need (date, time, classroom specifics) via our simple system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#4ECDC4] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Confirm</h3>
                <p className="text-[#2B2D42]/80">
                  Receive fast confirmation with your matched floater's profile, credentials, and ETA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#4ECDC4] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Welcome</h3>
                <p className="text-[#2B2D42]/80">
                  Your Circle Time floater arrives briefed, prepared, and ready to support your team.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center print:hidden">
            <Image
              src="/easy-process.png"
              alt="Easy process illustration"
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Proposed Membership Model */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-[#FF6B6B]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B6B]/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-[#2B2D42] mb-4 relative">Proposed Membership Model</h2>
          <p className="text-[#2B2D42]/80 mb-6 italic">Your Feedback is Crucial!</p>

          <div className="mb-6 relative">
            <h3 className="font-semibold text-lg text-[#2B2D42] mb-2">The Concept:</h3>
            <p className="text-[#2B2D42]/80">
              We're exploring a model that provides reliable, priority access to our pool of cleared, trained floaters
              for a predictable monthly fee, plus a transparent hourly rate only for the time you actually use.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-5 rounded-lg mb-6 shadow-inner relative print:bg-white print:border print:shadow-none">
            <h3 className="font-semibold text-lg text-[#2B2D42] mb-3">Proposed Structure:</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Monthly Access Fee: ~$125 - $200</p>
                  <p className="text-sm text-[#2B2D42]/70">
                    (Covers OCFS clearance maintenance for your center, floater onboarding, guaranteed priority access)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Pay-As-You-Go Usage Rate: ~$28 - $34 per hour</p>
                  <p className="text-sm text-[#2B2D42]/70">
                    (Billed only for hours a floater is actively working in your center. Rate may vary slightly based on
                    role/volume)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FF6B6B]/10 p-4 rounded-lg relative print:bg-white print:border print:border-[#FF6B6B]">
            <h3 className="font-semibold text-lg text-[#2B2D42] mb-2 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#FF6B6B]" />
              Seeking Your Input:
            </h3>
            <p className="text-[#2B2D42]/80">
              Does this membership approach feel more sustainable and valuable for managing staffing crises compared to
              high agency markups or the hidden costs of internal scrambling? We want your honest feedback!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-[#2B2D42]/60 print:mt-8 print:border-t print:pt-4">
        Circle Time Staffing - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
