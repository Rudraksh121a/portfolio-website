import { MapPin, Clock, CheckCircle, Zap } from "lucide-react";

export default function Overview() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
          Rudraksh Kanungo
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">
          Software Engineer | App Development | DevOps | Cloud
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/50 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">Location</span>
            </div>
            <p className="text-gray-100">India</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/50 transition-colors">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-gray-300">Experience</span>
            </div>
            <p className="text-gray-100">2+ Years</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-emerald-800/50 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-300">Status</span>
            </div>
            <p className="text-emerald-400">Available</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-orange-800/30 transition-colors">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4 flex items-center">
          <Zap className="w-5 h-5 text-orange-400 mr-2" />
          Quick Stats
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-orange-400">
              25+
            </div>
            <div className="text-xs sm:text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-red-400">2+</div>
            <div className="text-xs sm:text-sm text-gray-400">Years Exp</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-orange-400">
              DevOps
            </div>
            <div className="text-xs sm:text-sm text-gray-400">Expertise</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400">
              Cloud
            </div>
            <div className="text-xs sm:text-sm text-gray-400">Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
}
