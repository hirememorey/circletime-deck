import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Slide1() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-tr-full -z-10 print:hidden"></div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-primary">Circle Time Staffing Proposal</h1>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 print:gap-6">
        <div className="md:w-1/2 text-center md:text-left print:w-full">
          <div className="bg-primary text-white p-6 rounded-xl w-full max-w-md shadow-lg mb-8 print:max-w-full print:bg-primary print:shadow-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight print:text-4xl">
              Circle Time Staffing
            </h1>
            <p className="text-xl md:text-2xl mb-2 print:text-xl">
              Pilot Program Proposal for Little Scholars
            </p>
            <p className="text-lg md:text-xl print:text-lg">
              April 23, 2025
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-secondary shadow-md mb-8 w-full print:bg-white print:border print:border-l-4 print:shadow-none">
            <h2 className="text-xl font-semibold mb-4 text-primary">Are you constantly…</h2>
            <ul className="space-y-3 text-left">
              {[
                "Scrambling to meet ratios due to last-minute call-outs?",
                "Pulling directors or lead teachers from vital tasks to cover classrooms?",
                "Stressed about compliance risks, parent complaints, or staff burnout?",
                "Frustrated by unreliable staffing solutions?",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center print:w-full print:mt-4">
          <div className="relative w-full max-w-md aspect-square mb-6 print:max-w-xs print:mb-4">
            <Image
              src="/classroom-hero.png"
              alt="Early childhood education classroom"
              fill
              className="object-cover rounded-2xl shadow-lg print:shadow-none"
            />
          </div>

          <div className="bg-secondary text-primary p-6 rounded-xl w-full max-w-md shadow-lg print:max-w-full print:bg-secondary print:shadow-none">
            <p className="text-xl">
              Circle Time Staffing provides reliable, cleared, and trained ECE floaters ready to seamlessly support your center and bring back the calm.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-center text-primary/60 print:mt-8 print:border-t print:pt-4">
        Circle Time Staffing - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
