import { MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Slide3() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-tr-full -z-10 print:hidden"></div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-primary">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center print:text-3xl">
        Let's Pilot Together: Solving Staffing at Little Scholars
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
        {/* Section 1: Getting Coverage is Easy */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-secondary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative">Getting Coverage is Easy</h2>

          <div className="space-y-6 relative">
            <div className="flex items-start gap-4">
              <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Request</h3>
                <p className="text-primary/80">
                  Let us know your need (date, time, classroom specifics) via our simple system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Confirm</h3>
                <p className="text-primary/80">
                  Receive fast confirmation with your matched floater's profile, credentials, and ETA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Welcome</h3>
                <p className="text-primary/80">
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

        {/* Section 2: Pilot Program Proposal */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-destructive/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-destructive/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-4 relative">Pilot Program Proposal (8 Weeks)</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-5 rounded-lg shadow-inner relative print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-lg text-primary mb-3">Program Details:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Goal:</span> Validate the Floater service effectiveness at Little Scholars & gather operational feedback
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Scope:</span> 1 selected Little Scholars location
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Process:</span> Simple setup, platform access for Director(s), regular feedback check-ins
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-5 rounded-lg shadow-inner relative print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-lg text-primary mb-3">Pilot Pricing:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Monthly Access Fee:</span> Waived (For the 8-week pilot period)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Hourly Rate:</span> ~$28 (Assistant) / ~$32 (Lead) (Pay only for hours used)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg relative print:bg-white print:border print:border-destructive">
              <h3 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-destructive" />
                Commitment:
              </h3>
              <p className="text-primary/80">
                Provide center info for OCFS, encourage Director usage, provide feedback
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-primary/60 print:mt-8 print:border-t print:pt-4">
        A Low-Risk Way to Experience Reliable Staffing
      </div>
    </div>
  )
}
