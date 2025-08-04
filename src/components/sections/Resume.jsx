import { Download } from "lucide-react";
import resumeData from "../../data/resume.json";

export default function Resume() {
  return (
    <div className="relative h-screen -m-4 sm:-m-6 lg:-m-8">
      {/* Header */}
     

      {/* Floating Download Button - Right Side */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <a
          href={resumeData.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group hover:w-auto hover:px-4"
        >
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden group-hover:inline ml-2 text-sm font-medium whitespace-nowrap">
            Download PDF
          </span>
        </a>
      </div>

      {/* Full Screen Resume Preview */}
      <div className="w-full h-full bg-gray-900 border border-gray-800">
        <iframe
          src={resumeData.driveLink.replace("/view", "/preview")}
          className="w-full h-full"
          title="Resume Preview"
          frameBorder="0"
        />
      </div>

      {/* Last Updated Info - Bottom */}
      <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg px-3 py-1">
        <p className="text-xs text-gray-400">
          Last updated: {resumeData.lastUpdated}
        </p>
      </div>
    </div>
  );
}
