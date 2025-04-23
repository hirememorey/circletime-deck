import { CheckCircle, Clock, Calendar, Users, MessageSquare } from "lucide-react"

export default function Slide4() {
  return (
    <div className="h-full w-full p-8 md:p-12 flex flex-col relative overflow-hidden print:h-auto print:min-h-[11in] print:page-break-after-always">
      {/* Background decorative elements - hidden in print */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-accent/5 rounded-bl-full -z-10 print:hidden"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-secondary/5 rounded-tr-full -z-10 print:hidden"></div>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center print:text-3xl">
        <span className="relative">
          Next Steps: Pilot Program at Little Scholars
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/70 to-accent/50 rounded-full"></div>
        </span>
      </h1>

      <div className="flex-1 grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6">
        {/* Section 1: Pilot Timeline */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-accent/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative print:text-xl">Pilot Timeline</h2>

          <div className="space-y-6">
            {[
              { icon: Calendar, title: "Week 1-2: Setup", desc: "Onboarding, platform access, and initial training for your team." },
              { icon: Clock, title: "Week 3-6: Active Pilot", desc: "Regular usage, feedback collection, and adjustments as needed." },
              { icon: Users, title: "Week 7-8: Evaluation", desc: "Final assessment and transition planning for full implementation." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300 print:w-8 print:h-8">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-primary mb-2 group-hover/item:text-accent transition-colors duration-300 print:text-lg">{item.title}</h3>
                  <p className="text-primary/80 text-lg group-hover/item:text-primary/90 transition-colors duration-300 print:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Next Steps */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-secondary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group print:shadow-none print:border">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          <h2 className="text-2xl font-semibold text-primary mb-6 relative print:text-xl">Next Steps</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-6 rounded-lg shadow-inner relative group-hover:shadow-md transition-all duration-300 print:bg-white print:border print:shadow-none">
              <h3 className="font-semibold text-xl text-primary mb-4 print:text-lg">To Get Started:</h3>
              <ul className="space-y-3">
                {[
                  "Select Location: Choose which Little Scholars center will participate",
                  "Complete Setup: Provide center info for OCFS clearance",
                  "Schedule Kickoff: We'll coordinate with your team"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-lg group-hover/item:text-primary/90 transition-colors duration-200 print:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-destructive/10 p-6 rounded-lg relative group-hover:bg-destructive/20 transition-colors duration-300 print:bg-white print:border print:border-destructive">
              <div className="flex items-center gap-3 mb-3 group">
                <MessageSquare className="h-5 w-5 text-destructive group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-xl text-primary print:text-lg">Ready to Begin?</h3>
              </div>
              <p className="text-primary/80 text-lg group-hover:text-primary/90 transition-colors duration-300 print:text-base">
                Let's schedule a kickoff meeting to get your pilot started.
              </p>
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
