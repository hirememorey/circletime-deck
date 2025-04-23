import { CheckCircle, Clock, Calendar, Users, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Slide4() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-tr-full -z-10 print:hidden"></div>

      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <h1 className="text-2xl font-bold text-center text-primary">Circle Time Staffing Proposal</h1>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center print:text-3xl">
        Let's Pilot Together: Solving Staffing at Little Scholars
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
        {/* Section 1: Pilot Timeline */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-accent/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative">Pilot Timeline</h2>

          <div className="space-y-6 relative">
            <div className="flex items-start gap-4">
              <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Week 1-2: Setup</h3>
                <p className="text-primary/80">
                  Onboarding, platform access, and initial training for your team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Week 3-6: Active Pilot</h3>
                <p className="text-primary/80">
                  Regular usage, feedback collection, and adjustments as needed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md print:shadow-none">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Week 7-8: Evaluation</h3>
                <p className="text-primary/80">
                  Final assessment and transition planning for full implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Next Steps */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-secondary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full -z-0 group-hover:scale-150 transition-all duration-500 print:hidden"></div>
          <h2 className="text-2xl font-semibold text-primary mb-4 relative">Next Steps</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-5 rounded-lg shadow-inner relative print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-lg text-primary mb-3">To Get Started:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Select Location:</span> Choose which Little Scholars center will participate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Complete Setup:</span> Provide center info for OCFS clearance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold">Schedule Kickoff:</span> We'll coordinate with your team
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg relative print:bg-white print:border print:border-destructive">
              <h3 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-destructive" />
                Ready to Begin?
              </h3>
              <p className="text-primary/80">
                Let's schedule a kickoff meeting to get your pilot started.
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
