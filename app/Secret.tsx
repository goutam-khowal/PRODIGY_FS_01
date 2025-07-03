"use client";
import React from "react";
import { Shield, Lock } from "lucide-react";

function Secret({ email }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl w-full z-10">
        {/* Secret Page Content */}
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-500/30 relative">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 blur-sm -z-10"></div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mb-4 relative">
              <Shield className="w-10 h-10 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              🔒 SECRET AREA 🔒
            </h1>
            <p className="text-gray-300 text-lg">
              Classified Information - Top Secret Clearance Required
            </p>
          </div>

          {/* Secret Content Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Project Codename: Phoenix
              </h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm">
                  Status:{" "}
                  <span className="text-red-400 font-semibold">CLASSIFIED</span>
                </p>
                <p className="text-sm">
                  Your Email:{" "}
                  <span className="text-red-400 font-semibold">{email}</span>
                </p>
                <p className="text-sm">
                  Security Level:{" "}
                  <span className="text-red-400 font-semibold">ULTRA</span>
                </p>
                <p className="text-sm">
                  Access Level:{" "}
                  <span className="text-red-400 font-semibold">EYES ONLY</span>
                </p>
                <div className="mt-4 p-3 bg-red-500/20 rounded-lg border border-red-500/50">
                  <p className="text-xs text-red-300">
                    ⚠️ WARNING: Unauthorized access is prohibited
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Secure Vault
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Encrypted Files</span>
                  <span className="text-purple-400 font-semibold">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Security Protocols</span>
                  <span className="text-purple-400 font-semibold">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Threat Level</span>
                  <span className="text-purple-400 font-semibold">Minimal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secret Message */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-600/30 mb-8">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">
              📜 Decoded Message
            </h3>
            <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-green-400 border border-green-500/30">
              <p className="text-center">
                "The secret of getting ahead is getting started." - Mark Twain
              </p>
              <p className="text-center mt-2 text-xs text-gray-500">
                Message authenticated • Timestamp: {new Date().toLocaleString()}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => alert("Vault access granted!")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🔓 Access Vault
            </button>
            <button
              onClick={() => alert("Initiating secure protocols...")}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🛡️ Security Scan
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 bg-gray-800/50 rounded-lg p-2 border border-gray-700/50">
              🛡️ This session is encrypted and monitored for security purposes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secret;
