import { ChevronRight, ExternalLink, Github, Circle } from "lucide-react";
import { useState } from "react";

export default function Projects({ expandedProjects, toggleProject }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "aiml", label: "AI/ML" },
    { id: "cloud", label: "Cloud" },
    { id: "devops", label: "DevOps" },
  ];

  // List of public GitHub repositories (manually extracted, mapped to new categories)
  const projects = [
    {
      id: "Azure-DevOps--ACI",
      title: "Azure-DevOps--ACI",
      description:
        "Containerize React app with Docker, deploy to Azure Container Instances using Azure DevOps CI/CD.",
      status: "Completed",
      category: "cloud",
      tech: [
        "JavaScript",
        "Docker",
        "Azure DevOps",
        "Azure Container Instances",
      ],
      features: [
        "Cloud deployment",
        "CI/CD automation",
        "Docker containerization",
        "Azure integration",
      ],
      link: "https://github.com/Rudraksh121a/Azure-DevOps--ACI",
      demo: "",
    },
    {
      id: "AzureDevops-Terraform",
      title: "AzureDevops-Terraform",
      description: "Infrastructure as Code with Terraform and Azure DevOps.",
      status: "Completed",
      category: "devops",
      tech: ["Terraform", "Azure DevOps"],
      features: [
        "Infrastructure as Code",
        "Cloud provisioning",
        "DevOps automation",
        "Terraform scripts",
      ],
      link: "https://github.com/Rudraksh121a/AzureDevops-Terraform",
      demo: "",
    },
    {
      id: "CI-from-scratch-",
      title: "CI-from-scratch-",
      description: "Custom CI pipeline setup.",
      status: "Completed",
      category: "devops",
      tech: ["Shell", "CI/CD"],
      features: ["CI/CD pipeline", "Shell scripting", "DevOps best practices"],
      link: "https://github.com/Rudraksh121a/CI-from-scratch-",
      demo: "",
    },
    {
      id: "az-900-notes",
      title: "az-900-notes",
      description: "Notes for Azure Fundamentals certification.",
      status: "Completed",
      category: "cloud",
      tech: ["Markdown", "Azure"],
      features: ["Cloud fundamentals", "Azure concepts", "Certification prep"],
      link: "https://github.com/Rudraksh121a/az-900-notes",
      demo: "",
    },
    {
      id: "weathrly-docker-azure",
      title: "weathrly-docker-azure",
      description: "Weather app deployed with Docker on Azure.",
      status: "Completed",
      category: "cloud",
      tech: ["HTML", "Docker", "Azure"],
      features: ["Cloud deployment", "Dockerization", "Azure hosting"],
      link: "https://github.com/Rudraksh121a/weathrly-docker-azure",
      demo: "",
    },
    {
      id: "skills-introduction-to-github",
      title: "skills-introduction-to-github",
      description: "GitHub learning exercises.",
      status: "Completed",
      category: "devops",
      tech: ["Markdown", "GitHub"],
      features: ["Version control", "DevOps workflows", "GitHub Actions"],
      link: "https://github.com/Rudraksh121a/skills-introduction-to-github",
      demo: "",
    },
    {
      id: "skills-communicate-using-markdown",
      title: "skills-communicate-using-markdown",
      description: "Markdown communication exercises.",
      status: "Completed",
      category: "appdev",
      tech: ["Markdown"],
      features: ["Documentation", "Markdown syntax"],
      link: "https://github.com/Rudraksh121a/skills-communicate-using-markdown",
      demo: "",
    },
    {
      id: "testcode-cicd-GithubAction",
      title: "testcode-cicd-GithubAction",
      description: "CI/CD with GitHub Actions.",
      status: "Completed",
      category: "devops",
      tech: ["CSS", "GitHub Actions", "CI/CD"],
      features: ["CI/CD automation", "GitHub Actions", "DevOps pipelines"],
      link: "https://github.com/Rudraksh121a/testcode-cicd-GithubAction",
      demo: "",
    },
    {
      id: "Portfolio",
      title: "Portfolio",
      description: "Personal portfolio website.",
      status: "Completed",
      category: "webdev",
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Responsive design", "Portfolio showcase"],
      link: "https://github.com/Rudraksh121a/Portfolio",
      demo: "",
    },
    {
      id: "Ai-Saas",
      title: "Ai-Saas",
      description: "AI SaaS project.",
      status: "Completed",
      category: "aiml",
      tech: ["Python", "AI"],
      features: ["Python backend", "AI/ML integration", "Cloud-ready"],
      link: "https://github.com/Rudraksh121a/Ai-Saas",
      demo: "",
    },
    {
      id: "SynCodex",
      title: "SynCodex",
      description: "Forked code project.",
      status: "Completed",
      category: "appdev",
      tech: ["JavaScript"],
      features: ["App development", "JavaScript"],
      link: "https://github.com/Rudraksh121a/SynCodex",
      demo: "",
    },
    {
      id: "Rivoplay",
      title: "Rivoplay",
      description: "HTML project.",
      status: "Completed",
      category: "webdev",
      tech: ["HTML"],
      features: ["Web development", "HTML"],
      link: "https://github.com/Rudraksh121a/Rivoplay",
      demo: "",
    },
    {
      id: "Data-Science-Master",
      title: "Data-Science-Master",
      description: "Jupyter notebook for data science.",
      status: "Completed",
      category: "aiml",
      tech: ["Jupyter Notebook", "Python"],
      features: ["Python data analysis", "Cloud-ready notebooks", "AI/ML"],
      link: "https://github.com/Rudraksh121a/Data-Science-Master",
      demo: "",
    },
    {
      id: "MyBotHub",
      title: "MyBotHub",
      description: "TypeScript bot project.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript"],
      features: ["App development", "TypeScript"],
      link: "https://github.com/Rudraksh121a/MyBotHub",
      demo: "",
    },
    {
      id: "Storix",
      title: "Storix",
      description: "TypeScript project.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript"],
      features: ["App development", "TypeScript"],
      link: "https://github.com/Rudraksh121a/Storix",
      demo: "",
    },
    {
      id: "Xplore",
      title: "Xplore",
      description: "TypeScript project.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript"],
      features: ["App development", "TypeScript"],
      link: "https://github.com/Rudraksh121a/Xplore",
      demo: "",
    },
    {
      id: "price-comparison",
      title: "price-comparison",
      description: "Jupyter notebook for price comparison.",
      status: "Completed",
      category: "aiml",
      tech: ["Jupyter Notebook", "Python"],
      features: ["Python data analysis", "Cloud-ready notebooks", "AI/ML"],
      link: "https://github.com/Rudraksh121a/price-comparison",
      demo: "",
    },
    {
      id: "AIRBBENB",
      title: "AIRBBENB",
      description: "TypeScript project.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript"],
      features: ["App development", "TypeScript"],
      link: "https://github.com/Rudraksh121a/AIRBBENB",
      demo: "",
    },
    {
      id: "React-Natve-Apps",
      title: "React-Natve-Apps",
      description: "React Native apps.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript", "React Native"],
      features: ["App development", "React Native"],
      link: "https://github.com/Rudraksh121a/React-Natve-Apps",
      demo: "",
    },
    {
      id: "reactt-native-counterApp",
      title: "reactt-native-counterApp",
      description: "Kotlin counter app.",
      status: "Completed",
      category: "appdev",
      tech: ["Kotlin", "React Native"],
      features: ["App development", "Kotlin"],
      link: "https://github.com/Rudraksh121a/reactt-native-counterApp",
      demo: "",
    },
    {
      id: "password-generator-",
      title: "password-generator-",
      description: "TypeScript password generator.",
      status: "Completed",
      category: "appdev",
      tech: ["TypeScript"],
      features: ["App development", "TypeScript"],
      link: "https://github.com/Rudraksh121a/password-generator-",
      demo: "",
    },
    {
      id: "Vrinda-Store-Report",
      title: "Vrinda-Store-Report",
      description: "Store report project.",
      status: "Completed",
      category: "webdev",
      tech: ["HTML"],
      features: ["Web development", "HTML"],
      link: "https://github.com/Rudraksh121a/Vrinda-Store-Report",
      demo: "",
    },
    {
      id: "TODO",
      title: "TODO",
      description: "Python todo app.",
      status: "Completed",
      category: "appdev",
      tech: ["Python"],
      features: ["Python scripting", "Automation"],
      link: "https://github.com/Rudraksh121a/TODO",
      demo: "",
    },
    {
      id: "streamlit-Components",
      title: "streamlit-Components",
      description: "Python Streamlit components.",
      status: "Completed",
      category: "appdev",
      tech: ["Python", "Streamlit"],
      features: ["Python scripting", "Streamlit apps"],
      link: "https://github.com/Rudraksh121a/streamlit-Components",
      demo: "",
    },
    {
      id: "Dart",
      title: "Dart",
      description: "Dart language project.",
      status: "Completed",
      category: "appdev",
      tech: ["Dart"],
      features: ["App development", "Dart"],
      link: "https://github.com/Rudraksh121a/Dart",
      demo: "",
    },
    {
      id: "Numpy",
      title: "Numpy",
      description: "Jupyter notebook for NumPy.",
      status: "Completed",
      category: "aiml",
      tech: ["Jupyter Notebook", "Python", "NumPy"],
      features: ["Python data analysis", "AI/ML"],
      link: "https://github.com/Rudraksh121a/Numpy",
      demo: "",
    },
    {
      id: "Pandas",
      title: "Pandas",
      description: "Jupyter notebook for Pandas.",
      status: "Completed",
      category: "aiml",
      tech: ["Jupyter Notebook", "Python", "Pandas"],
      features: ["Python data analysis", "AI/ML"],
      link: "https://github.com/Rudraksh121a/Pandas",
      demo: "",
    },
    {
      id: "Machine-Learning",
      title: "Machine-Learning",
      description: "Jupyter notebook for machine learning.",
      status: "Completed",
      category: "aiml",
      tech: ["Jupyter Notebook", "Python", "Machine Learning"],
      features: ["Python data analysis", "AI/ML"],
      link: "https://github.com/Rudraksh121a/Machine-Learning",
      demo: "",
    },
  ];

  // Only show projects related to Python, Cloud, or DevOps
  const relevantCategories = ["cloud", "devops"];
  const relevantTech = [
    "Python",
    "Azure",
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Git",
    "GitHub Actions",
    "Azure DevOps",
    "Linux",
    "Shell Scripting",
    "Jenkins",
  ];
  const filteredProjects =
    activeCategory === "all"
      ? projects.filter(
          (project) =>
            relevantCategories.includes(project.category) ||
            project.tech.some((tech) => relevantTech.includes(tech))
        )
      : projects.filter(
          (project) =>
            project.category === activeCategory &&
            (relevantCategories.includes(project.category) ||
              project.tech.some((tech) => relevantTech.includes(tech)))
        );

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
        Projects
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={
              activeCategory === category.id
                ? "px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-900/70 to-red-900/70 text-orange-200 border border-orange-800/50 transition-all"
                : "px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-gray-800 transition-all"
            }
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-900 border border-gray-800 rounded-lg hover:border-orange-800/30 transition-colors"
        >
          <div
            className="p-4 sm:p-6 cursor-pointer"
            onClick={() => toggleProject(project.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                <ChevronRight
                  className={
                    expandedProjects.includes(project.id)
                      ? "w-5 h-5 text-orange-400 transition-transform rotate-90 mt-0.5 flex-shrink-0"
                      : "w-5 h-5 text-orange-400 transition-transform mt-0.5 flex-shrink-0"
                  }
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-3">
                <span
                  className={
                    project.status === "Completed"
                      ? "px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/50 text-emerald-300 border border-emerald-800/50 whitespace-nowrap"
                      : "px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-amber-900/50 text-amber-300 border border-amber-800/50 whitespace-nowrap"
                  }
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {expandedProjects.includes(project.id) && (
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-800">
              <div className="pt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-orange-300 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-orange-900/30 text-orange-200 rounded-full text-xs border border-orange-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-orange-300 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-400"
                      >
                        <Circle className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-2">
                  <a
                    href={project.link}
                    className="flex items-center justify-center space-x-2 text-sm text-orange-300 hover:text-orange-200 transition-colors px-3 py-2 bg-orange-900/20 rounded-lg border border-orange-800/30"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center justify-center space-x-2 text-sm text-red-300 hover:text-red-200 transition-colors px-3 py-2 bg-red-900/20 rounded-lg border border-red-800/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
