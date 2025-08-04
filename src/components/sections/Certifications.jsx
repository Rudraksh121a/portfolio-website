import { Award, Star, ExternalLink } from "lucide-react";
import certificationsData from "../../data/certifications.json";

export default function Certifications() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          <Award className="w-8 h-8 mr-3 text-orange-400 inline-block" />
          Certifications
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-800/30 rounded-xl p-6 shadow-xl hover:border-orange-600/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="text-sm text-orange-300 font-medium mt-1">
                      {cert.issuer} • {cert.date}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {cert.credential_id && (
                <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-800/50 rounded-lg">
                  <span className="font-medium">Credential ID:</span>{" "}
                  {cert.credential_id}
                </div>
              )}

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>View Certificate</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
