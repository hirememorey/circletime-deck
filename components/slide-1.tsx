import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Slide1() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-secondary/5 rounded-tr-full -z-10 print:hidden"></div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-12 print:gap-6">
        <div className="md:w-1/2 text-center md:text-left space-y-6 print:w-full">
          <div className="bg-primary text-white p-8 rounded-xl w-full max-w-xl shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300 print:max-w-full print:bg-primary print:shadow-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight print:text-4xl bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Circle Time
            </h1>
            <p className="text-xl md:text-2xl mb-4 print:text-xl">
              Pilot Program Proposal for Little Scholars
            </p>
            <p className="text-lg md:text-xl print:text-lg">
              April 23, 2025
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border-l-4 border-secondary shadow-md w-full hover:shadow-lg transition-all duration-300 print:bg-white print:border print:border-l-4 print:shadow-none">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Are you constantly...</h2>
            <ul className="space-y-4 text-left">
              {[
                "Scrambling to meet ratios due to last-minute call-outs?",
                "Pulling directors or lead teachers from vital tasks to cover classrooms?",
                "Stressed about compliance risks, parent complaints, or staff burnout?",
                "Frustrated by unreliable staffing solutions?",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <CheckCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg group-hover:text-primary transition-colors duration-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center gap-8 print:w-full">
          <div className="relative w-full max-w-2xl aspect-[4/3] mb-8 print:max-w-xl print:mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            <Image
              src="/classroom-setup.jpg"
              alt="Colorful early childhood classroom setup with educational materials"
              fill
              className="object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 print:shadow-none"
            />
          </div>

          <div className="bg-secondary/90 text-primary p-8 rounded-xl w-full shadow-lg hover:shadow-xl transition-shadow duration-300 print:max-w-full print:bg-secondary print:shadow-none">
            <p className="text-xl leading-relaxed">
              Circle Time provides reliable, cleared, and trained ECE floaters ready to seamlessly support your center and bring back the calm.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-base text-center text-primary/70 print:mt-8 print:border-t print:pt-4 print:text-sm">
        Circle Time - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
