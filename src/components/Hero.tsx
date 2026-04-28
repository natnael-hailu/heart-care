import type { JSX } from "react";

const Hero = (): JSX.Element => {
  // Smooth scroll handler for anchor links
  const handleBookAppointment = () => {
    // Replace with actual booking logic or scroll to booking section
    alert("📅 Appointment booking portal coming soon!");
  };

  const handleLearnMore = () => {
    // Scroll to "About" or "Services" section - for demo purposes
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("✨ Discover our advanced cardiology services");
    }
  };

  return (
    <>
      {/* Custom keyframe animations for fade-in-up effect */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-fade-in-up-delay {
            animation: fadeInUp 0.6s ease-out 0.2s forwards;
            opacity: 0;
          }
          .animate-fade-in-up-delay-2 {
            animation: fadeInUp 0.6s ease-out 0.4s forwards;
            opacity: 0;
          }
          .animate-fade-in-up-delay-3 {
            animation: fadeInUp 0.6s ease-out 0.6s forwards;
            opacity: 0;
          }
        `}
      </style>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 md:py-32"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Trust badge */}
              <div className="animate-fade-in-up mb-6 inline-flex items-center rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
                <span className="mr-2 text-primary">✦</span>
                World-Class Cardiology Center
              </div>

              {/* Main heading with gradient text */}
              <h1 className="animate-fade-in-up-delay text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Advanced Heart Care{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h1>

              {/* Description */}
              <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:mx-0">
                World-class cardiology with compassion. Personalized treatment
                plans using state-of-the-art technology and a patient-first
                approach.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <button
                  onClick={handleBookAppointment}
                  className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    📅 Book Appointment
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-primary-dark to-secondary transition-transform duration-300 group-hover:translate-y-0" />
                </button>

                <button
                  onClick={handleLearnMore}
                  className="rounded-full border-2 border-primary/30 bg-white/60 px-8 py-3.5 text-base font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  Learn More
                </button>
              </div>

              {/* Social proof / rating */}
              <div className="animate-fade-in-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-gray-200/50 pt-8 md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    10,000+ Happy Patients
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>98% Patient Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right side - Advanced Illustration Card */}
            <div className="animate-fade-in-up-delay relative flex-1">
              <div className="relative">
                {/* Floating elements background effects */}
                <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />

                {/* Main illustration card with glassmorphism */}
                <div className="relative rounded-2xl bg-white/40 p-6 shadow-2xl backdrop-blur-sm md:p-8">
                  <div className="overflow-hidden rounded-xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-inner">
                    {/* Heartbeat SVG illustration */}
                    <div className="flex justify-center">
                      <svg
                        viewBox="0 0 400 200"
                        className="h-auto w-full max-w-[320px]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Heartbeat line background */}
                        <path
                          d="M20 100 L80 100 L100 70 L120 130 L140 90 L160 110 L180 80 L200 100 L260 100"
                          stroke="#ef4444"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          className="animate-pulse"
                        />
                        {/* Glowing dot on peak */}
                        <circle
                          cx="120"
                          cy="130"
                          r="5"
                          fill="#3b82f6"
                          className="animate-ping"
                          opacity="0.6"
                        />
                        <circle cx="120" cy="130" r="4" fill="#3b82f6" />
                        {/* Stylized Heart Icon */}
                        <g transform="translate(260, 70) scale(0.6)">
                          <path
                            d="M0 20 C0 10 10 0 20 0 C30 0 40 10 40 20 C40 30 30 40 20 50 C10 40 0 30 0 20Z"
                            fill="url(#heartGradient)"
                            stroke="#ef4444"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 50 L20 30 M12 38 L28 38"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="heartGradient"
                            x1="0"
                            y1="0"
                            x2="40"
                            y2="50"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ef4444" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Decorative text */}
                    <div className="mt-4 text-center text-sm font-medium text-gray-500">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-primary">
                        Advanced Diagnostics
                      </span>
                    </div>
                  </div>

                  {/* Floating badge 1 */}
                  <div className="absolute -left-4 top-1/4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-lg backdrop-blur-sm">
                    🫀 3D Echo
                  </div>
                  {/* Floating badge 2 */}
                  <div className="absolute -right-4 bottom-1/3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-lg backdrop-blur-sm">
                    ⚡ AI Analysis
                  </div>
                </div>

                {/* Bottom trust icon */}
                <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 transform items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-gray-600 shadow-md">
                  <svg
                    className="h-3.5 w-3.5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Joint Commission Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-12 w-full text-blue-50/40 md:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.52,159.71,99.17,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;