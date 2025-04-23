import { MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Slide3() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-secondary/5 rounded-tr-full -z-10 print:hidden"></div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center print:text-3xl">
        <span className="relative">
          Let's Pilot Together: Solving Staffing at Little Scholars
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/70 to-primary/50 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:gap-6">
        {/* Section 1: Getting Coverage is Easy */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-secondary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative print:text-xl">Getting Coverage is Easy</h2>

          <div className="space-y-6 relative">
            {[
              { number: "1", title: "Request", desc: "Let us know your need (date, time, classroom specifics) via our simple system." },
              { number: "2", title: "Confirm", desc: "Receive fast confirmation with your matched floater's profile, credentials, and ETA." },
              { number: "3", title: "Welcome", desc: "Your Circle Time floater arrives briefed, prepared, and ready to support your team." }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-all duration-300 print:shadow-none print:w-8 print:h-8">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2 group-hover/item:text-secondary transition-colors duration-300 print:text-lg">{step.title}</h3>
                  <p className="text-primary/80 text-lg group-hover/item:text-primary/90 transition-colors duration-300 print:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Pilot Program Proposal */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-destructive/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative print:text-xl">Pilot Program Proposal (8 Weeks)</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 rounded-lg shadow-inner relative group-hover:shadow-md transition-all duration-300 print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-xl text-primary mb-4 print:text-lg">Program Details:</h3>
              <ul className="space-y-3">
                {[
                  { desc: "Goal: Validate the Floater service effectiveness at Little Scholars & gather operational feedback" },
                  { desc: "Scope: 1 selected Little Scholars location" },
                  { desc: "Process: Simple setup, platform access for Director(s), regular feedback check-ins" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-lg group-hover/item:text-primary/90 transition-colors duration-200 print:text-base">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 rounded-lg shadow-inner relative group-hover:shadow-md transition-all duration-300 print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-xl text-primary mb-4 print:text-lg">Pilot Pricing:</h3>
              <ul className="space-y-3">
                {[
                  { desc: "Monthly Access Fee: Waived (For the 8-week pilot period)" },
                  { desc: "Hourly Rate: ~$28 (Assistant) / ~$32 (Lead) (Pay only for hours used)" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-lg group-hover/item:text-primary/90 transition-colors duration-200 print:text-base">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-base text-center text-primary/70 print:mt-4 print:border-t print:pt-4 print:text-sm">
        A Low-Risk Way to Experience Reliable Staffing
      </div>
    </div>
  )
}
