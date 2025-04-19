import { CheckCircle, Calendar, Mail } from "lucide-react"
import Image from "next/image"

export default function Slide4() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in]">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE66D]/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4ECDC4]/5 rounded-tr-full -z-10 print:hidden"></div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-[#2B2D42]">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-6 text-center relative print:text-3xl">
        <span className="relative inline-block">
          Your Partner in Quality & Compliance
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#4ECDC4]/70 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
        {/* Section 1: Addressing Common Questions */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-[#4ECDC4]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4ECDC4]/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-[#2B2D42] mb-6 relative">Addressing Common Questions</h2>

          <div className="space-y-6 relative">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#4ECDC4]/10 rounded-lg flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#4ECDC4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Compliance</h3>
                <p className="text-[#2B2D42]/80">
                  Rest assured. All floaters meet DOH/OCFS training requirements and are fully background-checked for
                  your specific center.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#4ECDC4]/10 rounded-lg flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#4ECDC4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Parent Communication</h3>
                <p className="text-[#2B2D42]/80">
                  We provide professional badges and short floater bios for easy, transparent communication with
                  families.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#4ECDC4]/10 rounded-lg flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#4ECDC4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#2B2D42]">Classroom Fit</h3>
                <p className="text-[#2B2D42]/80">
                  Our training emphasizes smooth integration. We facilitate briefings and use your feedback to ensure
                  the best possible match over time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center print:hidden">
            <Image
              src="/classroom-support.png"
              alt="Classroom support illustration"
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Let's Solve This Together */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-[#FF6B6B]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B6B]/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-[#2B2D42] mb-4 relative">Let's Solve This Together</h2>

          <p className="text-[#2B2D42]/80 mb-6 relative">
            Stop letting staffing gaps disrupt your program and drain your energy. Circle Time Staffing aims to be the
            reliable, high-quality solution NYC centers deserve.
          </p>

          <div className="bg-gradient-to-br from-[#2B2D42] to-[#3a3d57] text-white p-6 rounded-lg mb-6 shadow-lg relative print:bg-[#2B2D42] print:shadow-none">
            <h3 className="font-semibold text-xl mb-4 text-center">Ready to Share Your Thoughts?</h3>
            <p className="text-center mb-4">Help us build the best staffing solution for centers like yours.</p>

            <div className="space-y-4 mt-6 relative">
              <div className="w-full bg-[#4ECDC4] text-[#2B2D42] font-semibold p-3 rounded flex items-center justify-center gap-2 print:p-2">
                <Calendar className="h-4 w-4" />
                Schedule a 15-Minute Feedback Call
              </div>

              <div className="w-full border border-white text-white p-3 rounded flex items-center justify-center gap-2 print:p-2">
                <Mail className="h-4 w-4" />
                Email: harris@getcircletime.com
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 relative">
            <div className="bg-[#FFE66D]/20 p-3 rounded-lg inline-block print:bg-white print:border print:border-[#FFE66D]">
              <p className="text-[#2B2D42] font-semibold text-center text-sm">
                Circle Time Staffing - Bringing reliability back to ECE staffing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-[#2B2D42]/60 print:mt-8 print:border-t print:pt-4">
        Thank you for your interest in Circle Time Staffing!
      </div>
    </div>
  )
}
