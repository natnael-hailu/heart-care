import type { JSX } from "react";

// Extended service data model with icons and detailed features
interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Cardiac Surgery",
    description:
      "Minimally invasive and robotic‑assisted procedures with faster recovery.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    features: ["Beating heart surgery", "Valve repair/replacement", "Post‑op rehab"],
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    title: "Advanced Diagnostics",
    description:
      "State‑of‑the‑art imaging and AI‑powered analysis for precise detection.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    features: ["3D Echo", "CT Angiography", "ECG & Holter"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "24/7 Emergency Care",
    description:
      "Round‑the‑clock specialized cardiac emergency team and rapid intervention.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    features: ["Ambulance support", "Resuscitation team", "Tele‑cardiology"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Services = (): JSX.Element => {
  return (
    <>
      {/* Custom keyframes for card entrance */}
      <style>
        {`
          @keyframes cardGlow {
            0% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
            50% { box-shadow: 0 20px 40px -12px rgba(59,130,246,0.3); }
            100% { box-shadow: 0 25px 40px -12px rgba(0,0,0,0.1); }
          }
          .animate-card {
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
          }
          .animate-card:nth-child(1) { animation-delay: 0.1s; }
          .animate-card:nth-child(2) { animation-delay: 0.3s; }
          .animate-card:nth-child(3) { animation-delay: 0.5s; }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 py-24 md:py-32"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <span className="mr-2">⚡</span>
              What We Offer
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cardiac Services
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Tailored treatments using the latest technology, delivered with
              compassion and excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="animate-card group relative rounded-2xl bg-white/60 p-1 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full rounded-xl bg-white p-6 transition-all duration-300 group-hover:bg-white/90">
                  {/* Icon + gradient circle */}
                  <div
                    className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-md`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>

                  {/* Feature list */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover action button */}
                  <button className="mt-2 inline-flex items-center text-sm font-medium text-primary transition-all hover:gap-1 group-hover:gap-1">
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust banner below cards */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/50 px-8 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🫀</span>
                <span className="font-medium">5000+ Surgeries / year</span>
              </div>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="font-medium">NABH Accredited</span>
              </div>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="font-medium">98% Patient Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;