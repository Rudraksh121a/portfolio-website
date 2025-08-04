import {
  Code,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Clock,
  CheckCircle,
  Users,
  Zap,
  Award,
  BookOpen,
  Star,
} from "lucide-react";

export default function Sidebar({
  activeSection,
  handleSectionChange,
  isMobileMenuOpen,
  toggleMobileMenu,
}) {
  const sidebarItems = [
    // { id: "overview", label: "Overview", icon: <Globe className="w-4 h-4" /> },
    { id: "about", label: "About Me", icon: <Users className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    {
      id: "skills",
      label: "Skills & Tools",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: "certifications",
      label: "Certifications",
      icon: <Award className="w-4 h-4" />,
    },
    {
      id: "resume",
      label: "Resume",
      icon: <BookOpen className="w-4 h-4" />,
    },
    // {
    //   id: "experience",
    //   label: "Experience",
    //   icon: <Award className="w-4 h-4" />,
    // },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={
          isMobileMenuOpen
            ? "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 flex-shrink-0 transform translate-x-0 transition-transform duration-300 lg:relative lg:translate-x-0"
            : "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 flex-shrink-0 transform -translate-x-full transition-transform duration-300 lg:relative lg:translate-x-0"
        }
      >
        {/* Desktop Header */}
        <div className="hidden lg:block p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-100">Rudraksh Kanungo</h1>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>

        <nav className="p-4 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={
                activeSection === item.id
                  ? "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors bg-gradient-to-r from-orange-900/50 to-red-900/50 text-orange-200 border border-orange-800/50 mb-1"
                  : "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 mb-1"
              }
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Available for work</span>
          </div>
        </div> */}
      </div>
    </>
  );
}
