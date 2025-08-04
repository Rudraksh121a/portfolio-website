import { Code, Menu, X } from "lucide-react";

export default function Header({ isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <div className="lg:hidden bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
          <Code className="w-4 h-4 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-gray-100 text-sm">
            Rudraksh Kanungo
          </h1>
          <p className="text-xs text-gray-400">Software Engineer</p>
        </div>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-colors"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
