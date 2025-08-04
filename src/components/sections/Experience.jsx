import { Circle } from "lucide-react";

export default function Experience() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
        Experience
      </h1>

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-100">
                Software Engineer
              </h3>
              <p className="text-orange-300">Freelance & Personal Projects</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full self-start">
              2022 - Present
            </span>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-orange-400" />
              <span className="text-sm sm:text-base">
                Developed 25+ mobile and web applications using React Native,
                Flutter, and Python
              </span>
            </li>
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-orange-400" />
              <span className="text-sm sm:text-base">
                Built machine learning models for predictive analytics in
                healthcare and sports
              </span>
            </li>
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-orange-400" />
              <span className="text-sm sm:text-base">
                Specialized in DevOps practices and cloud deployment using AWS
                and Render
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-100">
                App Developer
              </h3>
              <p className="text-orange-300">Independent Projects</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full self-start">
              2021 - 2022
            </span>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-red-400" />
              <span className="text-sm sm:text-base">
                Created cross-platform mobile applications for invoice
                generation and expense tracking
              </span>
            </li>
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-red-400" />
              <span className="text-sm sm:text-base">
                Implemented automation scripts for web scraping and desktop
                automation
              </span>
            </li>
            <li className="flex items-start space-x-2 p-2 bg-gray-800/30 rounded">
              <Circle className="w-3 h-3 mt-2 flex-shrink-0 text-red-400" />
              <span className="text-sm sm:text-base">
                Focused on Python-based solutions using Flask, Django, and
                various GUI frameworks
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
