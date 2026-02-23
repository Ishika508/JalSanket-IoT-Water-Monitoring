"use client";

import { useRouter } from "next/navigation";

export default function DeviceSetup() {
  const router = useRouter();

  return (
    <div className="min-h-screen text-white p-8 animate-fadeIn relative overflow-hidden">

      {/* ===== Background Glow (USES GLOBAL CSS THEME) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-2">
          Device Setup
        </h1>

        <p className="text-gray-400 mb-10">
          Connect your JalRakshak monitoring device or request one from the government.
        </p>

        {/* OPTIONS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-6">

          {/* Connect Device */}
          <div className="card animate-fadeIn hover:shadow-cyan-500/20">
            <h2 className="text-xl font-semibold mb-3">
              🔌 Connect Existing Device
            </h2>

            <p className="text-gray-400 mb-6">
              Enter device code printed on your JalRakshak hardware.
            </p>

            <button
              onClick={() => router.push("/user/connect")}
              className="btn-primary"
            >
              Connect Device
            </button>
          </div>

          {/* Request Device */}
          <div className="card animate-fadeIn hover:shadow-cyan-500/20">
            <h2 className="text-xl font-semibold mb-3">
              🚚 Request Government Device
            </h2>

            <p className="text-gray-400 mb-6">
              Apply for installation of monitoring hardware in your area.
            </p>

            <button
              onClick={() => router.push("/user/request-device")}
              className="btn-primary"
            >
              Request Installation
            </button>
          </div>

          {/* Continue Without Device */}
          <div className="card animate-fadeIn hover:shadow-cyan-500/20">
            <h2 className="text-xl font-semibold mb-3">
              📋 Continue Without Device
            </h2>

            <p className="text-gray-400 mb-6">
              Report issues manually and receive AI health insights.
            </p>

            <button
              onClick={() => router.push("/user/dashboard")}
              className="btn-primary"
            >
              Continue
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}