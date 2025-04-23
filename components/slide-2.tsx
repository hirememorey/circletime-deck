import { Shield, BookOpen, Users } from "lucide-react"
import Image from "next/image"

export default function Slide2() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 left-0 w-full h-full print:hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-accent/5 rounded-tr-full"></div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center relative print:text-3xl">
        <span className="relative">
          End Your ECE Staffing Scramble
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-destructive/70 to-destructive/50 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-3 gap-8 relative print:grid-cols-3 print:gap-6">
        {/* Section 1: The Floater Profile */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-accent flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="h-7 w-7 text-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-primary print:text-xl">The Floater Profile</h2>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-6">
            <p className="text-primary/80 text-lg leading-relaxed group-hover:text-primary/90 transition-colors duration-300 print:text-base">
              Our floaters represent a diverse range of experience and qualifications. While many hold CDAs or Associate's Degrees in ECE, our pool also includes experienced individuals qualified for Lead Teacher roles. This breadth of capability ensures we can match the right floater to your specific needs.
            </p>

            <div className="mt-auto">
              <div className="bg-accent/20 p-4 rounded-lg group-hover:bg-accent/30 transition-colors duration-300 print:bg-white print:border print:border-accent">
                <p className="text-primary font-semibold text-center text-lg print:text-base">The Right Support, Fully Compliant for Little Scholars</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Trained for Day 1 Success */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-secondary flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-7 w-7 text-secondary" />
            </div>
            <h2 className="text-2xl font-semibold text-primary print:text-xl">Trained for Day 1 Success</h2>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-6">
            <div>
              <p className="text-primary/80 text-lg mb-4 leading-relaxed group-hover:text-primary/90 transition-colors duration-300 print:text-base">
                Our floaters are specifically trained to help centers maintain proper ratios while ensuring high-quality care. They receive practical training focused on:
              </p>
              <ul className="space-y-3 text-lg print:text-base">
                {[
                  { title: "Mastery of Transitions & Flow", desc: "Minimizing chaos during key parts of the day." },
                  { title: "Situational Awareness", desc: "Actively supervising and anticipating needs." },
                  { title: "Verbal Warmth & Tone", desc: "Respectfully communicating with your center's culture." },
                  { title: "Safety & Hygiene", desc: "Following proper diapering and mealtime protocols." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="text-secondary font-bold group-hover/item:scale-110 transition-transform duration-200">•</span>
                    <span className="group-hover/item:text-primary/90 transition-colors duration-200">
                      <span className="font-semibold">{item.title}:</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Cleared & Compliant */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-destructive flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <div className="mb-4 flex items-center gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-7 w-7 text-destructive" />
            </div>
            <h2 className="text-2xl font-semibold text-primary print:text-xl">OCFS Cleared for Your Center(s)</h2>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-6">
            <p className="text-primary/80 text-lg leading-relaxed group-hover:text-primary/90 transition-colors duration-300 print:text-base">
              We proactively manage the OCFS background check process to get multiple floaters in our pool cleared specifically for your Little Scholars license(s). They can work unsupervised, ensuring full compliance.
            </p>

            <div className="mt-auto">
              <div className="bg-destructive/10 p-4 rounded-lg group-hover:bg-destructive/20 transition-colors duration-300 print:bg-white print:border print:border-destructive">
                <p className="text-primary font-semibold text-center text-lg print:text-base">
                  Fully compliant with OCFS regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-base text-center text-primary/70 print:mt-4 print:border-t print:pt-4 print:text-sm">
        Circle Time - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
