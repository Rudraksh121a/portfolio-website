import { Zap } from "lucide-react";

export default function Skills() {
  const skills = {
    Cloud: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    DevOps: [
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Azure DevOps",
      "Linux",
      "Shell Scripting",
      "Jenkins",
      "Monitoring & Logging",
    ],
    Python: [
      "Python",
      "Flask",
      "Django",
      "FastAPI",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Streamlit",
      "Automation & Scripting",
      "REST API",
    ],
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
        Skills & Tools
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-orange-400" />
              {category}
            </h3>
            <div className="space-y-3">
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center p-2 bg-gray-800/30 rounded-lg"
                >
                  <span className="text-gray-300 text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
