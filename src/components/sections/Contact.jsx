import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Users,
  Clock,
  Globe,
} from "lucide-react";
import contactData from "../../data/contact.json";

export default function Contact() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 sm:mb-6">
          <Mail className="w-8 h-8 mr-3 text-orange-400 inline-block" />
          Get In Touch
        </h1>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-800/30 rounded-xl p-6 sm:p-8 shadow-xl hover:border-orange-600/50 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-orange-400" />
                  Contact Information
                </h3>
                <div className="flex items-center space-x-3 p-4 bg-gray-800/60 rounded-xl hover:bg-gray-800/80 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Address</p>
                    <a
                      href={`mailto:${contactData.contact.email}`}
                      className="text-gray-200 hover:text-orange-400 transition-colors font-medium"
                    >
                      {contactData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="p-6 bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-600/20 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  Let's Work Together
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a project in mind or just want to
                  chat about technology, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-2 text-orange-400" />
                  Follow Me
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href={contactData.contact.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                      <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">GitHub</p>
                      <p className="text-gray-400 text-sm">
                        Check out my repositories
                      </p>
                    </div>
                  </a>

                  <a
                    href={contactData.contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">
                        Connect professionally
                      </p>
                    </div>
                  </a>

                  <a
                    href={contactData.contact.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center group-hover:bg-sky-400 transition-colors">
                      <Twitter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">Twitter</p>
                      <p className="text-gray-400 text-sm">
                        Follow for updates
                      </p>
                    </div>
                  </a>

                  <a
                    href={contactData.contact.social.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">Medium</p>
                      <p className="text-gray-400 text-sm">Read my articles</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
