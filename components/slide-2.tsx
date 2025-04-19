import { Shield, BookOpen, Users } from "lucide-react"
import Image from "next/image"

export default function Slide2() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 left-0 w-full h-full print:hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ECDC4]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFE66D]/5 rounded-tr-full"></div>
      </div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-[#2B2D42]">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-6 text-center relative print:text-3xl">
        <span className="relative">
          More Than Just Coverage:
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF6B6B]/70 rounded-full"></div>
        </span>{" "}
        Qualified, Prepared Support
      </h1>

      <div className="flex-1 grid md:grid-cols-3 gap-6 mt-4 relative print:grid-cols-3 print:gap-4">
        {/* Section 1: Cleared & Compliant */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#FF6B6B] flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B6B]/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-[#FF6B6B]/10 rounded-lg">
              <Shield className="h-8 w-8 text-[#FF6B6B]" />
            </div>
            <h2 className="text-xl font-semibold text-[#2B2D42]">Cleared & Compliant</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-[#2B2D42]/80">
              <span className="font-semibold">Fully OCFS Cleared for Your Center:</span> This is key. Unlike typical
              agency staff, our floaters complete the OCFS background check specifically tied to your license. This
              means they can work independently (no constant direct supervision needed) and ensures you meet all DOHMH &
              OCFS requirements.
            </p>
          </div>

          <div className="mt-4 relative print:hidden">
            <Image
              src="/compliance-icon.png"
              alt="Compliance illustration"
              width={80}
              height={80}
              className="mx-auto opacity-80"
            />
          </div>
        </div>

        {/* Section 2: Trained for Day 1 Success */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#4ECDC4] flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#4ECDC4]/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
              <BookOpen className="h-8 w-8 text-[#4ECDC4]" />
            </div>
            <h2 className="text-xl font-semibold text-[#2B2D42]">Trained for Day 1 Success</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-[#2B2D42]/80 mb-3">
              We know ECE requires specific skills. Our floaters aren't just "warm bodies"; they receive practical
              training focused on:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] font-bold">•</span>
                <span>
                  <span className="font-semibold">Mastery of Transitions & Flow:</span> Minimizing chaos during key
                  parts of the day.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] font-bold">•</span>
                <span>
                  <span className="font-semibold">Situational Awareness:</span> Actively supervising and anticipating
                  needs for a safer environment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4ECDC4] font-bold">•</span>
                <span>
                  <span className="font-semibold">Verbal Warmth & Tone Matching:</span> Respectfully communicating in a
                  way that fits your center's culture.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 relative print:hidden">
            <Image
              src="/training-icon.png"
              alt="Training illustration"
              width={80}
              height={80}
              className="mx-auto opacity-80"
            />
          </div>
        </div>

        {/* Section 3: The Floater Profile */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#FFE66D] flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFE66D]/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-[#FFE66D]/10 rounded-lg">
              <Users className="h-8 w-8 text-[#FFE66D]" />
            </div>
            <h2 className="text-xl font-semibold text-[#2B2D42]">The Floater Profile</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-[#2B2D42]/80">
              Our floaters typically hold CDAs or Associate's Degrees in ECE. They function capably at the Assistant
              Teacher level and are motivated by flexibility, gaining experience, and supporting high-quality centers
              like yours.
            </p>

            <div className="mt-6 relative">
              <div className="flex justify-center mb-4 print:hidden">
                <Image
                  src="/teacher-profile.png"
                  alt="Teacher profile illustration"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#FFE66D]/30"
                />
              </div>
              <div className="bg-[#FFE66D]/20 p-4 rounded-lg print:bg-white print:border print:border-[#FFE66D]">
                <p className="text-[#2B2D42] font-semibold text-center">Qualified, Reliable, Ready to Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-[#2B2D42]/60 print:mt-8 print:border-t print:pt-4">
        Circle Time Staffing - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
