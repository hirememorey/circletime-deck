import { Shield, BookOpen, Users } from "lucide-react"
import Image from "next/image"

export default function Slide2() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 left-0 w-full h-full print:hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-tr-full"></div>
      </div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-primary">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center relative print:text-3xl">
        <span className="relative">
          End Your ECE Staffing Scramble
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-destructive/70 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-3 gap-6 mt-4 relative print:grid-cols-3 print:gap-4">
        {/* Section 1: The Floater Profile */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-accent flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-xl font-semibold text-primary">The Floater Profile</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-primary/80">
              Our floaters represent a diverse range of experience and qualifications. While many hold CDAs or Associate's Degrees in ECE, our pool also includes experienced individuals qualified for Lead Teacher roles. This breadth of capability ensures we can match the right floater to your specific needs, whether it's assistant-level support or more advanced classroom leadership.
            </p>

            <div className="mt-6 relative">
              <div className="flex justify-center mb-4 print:hidden">
                <Image
                  src="/teacher-profile.png"
                  alt="Teacher profile illustration"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-accent/30"
                />
              </div>
              <div className="bg-accent/20 p-4 rounded-lg print:bg-white print:border print:border-accent">
                <p className="text-primary font-semibold text-center">The Right Support, Fully Compliant for Little Scholars</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Trained for Day 1 Success */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-secondary flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-xl font-semibold text-primary">Trained for Day 1 Success</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-primary/80 mb-3">
              Our floaters are specifically trained to help centers maintain proper ratios while ensuring high-quality care. They receive practical training focused on:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <span className="font-semibold">Mastery of Transitions & Flow:</span> Minimizing chaos during key
                  parts of the day.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <span className="font-semibold">Situational Awareness:</span> Actively supervising and anticipating
                  needs for a safer environment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <span className="font-semibold">Verbal Warmth & Tone Matching:</span> Respectfully communicating in a
                  way that fits your center's culture.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <span className="font-semibold">Diapering & Hygiene:</span> Handling diapering routines safely and hygienically.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <span className="font-semibold">Mealtime Support:</span> Supporting feeding and mealtime routines effectively.
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

        {/* Section 3: Cleared & Compliant */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-destructive flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group print:shadow-none print:border print:border-t-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-destructive/5 rounded-bl-full -z-0 group-hover:w-full group-hover:h-full transition-all duration-500 print:hidden"></div>
          <div className="mb-4 flex items-center gap-3 relative">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <Shield className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-xl font-semibold text-primary">OCFS Cleared for Your Center(s)</h2>
          </div>

          <div className="flex-1 relative">
            <p className="text-primary/80">
              We proactively manage the OCFS background check process to get multiple floaters in our pool cleared specifically for your Little Scholars license(s). They can work unsupervised, ensuring full compliance.
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
      </div>

      <div className="mt-6 text-sm text-center text-primary/60 print:mt-8 print:border-t print:pt-4">
        Circle Time Staffing - Bringing reliability back to ECE staffing.
      </div>
    </div>
  )
}
