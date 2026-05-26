import {
  BookOpen,
  Award,
  Star,
  TerminalSquare,
} from "lucide-react";
import aboutData from "../../data/about.json";

const iconMap = {
  BookOpen,
  Award,
  TerminalSquare,
};

export default function About() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight">
          {aboutData.about.title}
        </h1>

        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 hover:border-orange-800/40 transition-all duration-300 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="space-y-5 relative z-10">
            {aboutData.about.description.map((para, idx) => (
              <p
                key={idx}
                className="text-gray-300 leading-relaxed text-base sm:text-lg font-light tracking-wide"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto space-y-6">
          {aboutData.sections.map((section, idx) => {
            const Icon = iconMap[section.icon] || Award;

            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-orange-600/40 transition-all duration-300 group"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text mb-6 flex items-center tracking-tight">
                  <Icon className="w-7 h-7 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  {section.title}
                </h3>

                {/* Education Type */}
                {section.title === "Education" ? (
                  <div className="space-y-4">
                    {section.items.map((item, eduIdx) => (
                      <div
                        key={eduIdx}
                        className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:border-orange-600/30"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-100 mb-2">
                              {item.degree}
                            </h4>
                            <p className="text-lg text-orange-300 font-medium">
                              {item.institution}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-lg text-sm font-semibold border border-orange-600/30">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Other Section Types (Achievements, Certifications)
                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center space-x-3 p-4 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors"
                      >
                        <Star className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
