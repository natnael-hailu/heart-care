import type { JSX } from "react";

// Extended doctor data model with complete information
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  education: string[];
  languages: string[];
  availability: string;
  rating: number;
  patients: number;
  image: string;
  icon: JSX.Element;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Samuel Bekele",
    specialization: "Interventional Cardiologist",
    experience: "15+ years",
    education: ["MD - Cardiology", "Fellowship - Johns Hopkins", "FACC"],
    languages: ["English", "Amharic", "French"],
    availability: "Mon, Wed, Fri",
    rating: 4.9,
    patients: 1250,
    image: "",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Dr. Helen Tadesse",
    specialization: "Cardiothoracic Surgeon",
    experience: "20+ years",
    education: ["MD - Surgery", "FRCS - London", "MCh - Cardiac Surgery"],
    languages: ["English", "Amharic", "German"],
    availability: "Tue, Thu, Sat",
    rating: 4.95,
    patients: 1890,
    image: "",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Dr. Yonas Desta",
    specialization: "Electrophysiologist",
    experience: "12+ years",
    education: ["MD - Cardiology", "Fellowship - Mayo Clinic", "CEPS"],
    languages: ["English", "Amharic", "Arabic"],
    availability: "Mon, Thu, Sat",
    rating: 4.85,
    patients: 980,
    image: "",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Dr. Mulugeta Alemu",
    specialization: "Pediatric Cardiologist",
    experience: "18+ years",
    education: ["MD - Pediatrics", "Fellowship - Boston Children's", "FACC"],
    languages: ["English", "Amharic", "Italian"],
    availability: "Mon, Tue, Wed",
    rating: 4.92,
    patients: 2100,
    image: "",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

const Doctors = (): JSX.Element => {
  return (
    <>
      {/* Custom keyframes for cards */}
      <style>
        {`
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-doctor-card {
            animation: fadeSlideUp 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-doctor-card:nth-child(1) { animation-delay: 0.1s; }
          .animate-doctor-card:nth-child(2) { animation-delay: 0.25s; }
          .animate-doctor-card:nth-child(3) { animation-delay: 0.4s; }
          .animate-doctor-card:nth-child(4) { animation-delay: 0.55s; }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .shimmer:hover .shimmer-effect {
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255,255,255,0.3), 
              transparent);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
          }
        `}
      </style>

      <section
        id="doctors"
        className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 md:py-32"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-amber-100/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <span className="mr-2">👨‍⚕️</span>
              Expert Medical Team
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Specialist Doctors
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              World‑class cardiologists and cardiac surgeons dedicated to your
              heart health.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="animate-doctor-card group relative rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Doctor Image Placeholder */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect" />
                    
                    {/* Doctor Icon (centered) */}
                    <div className="flex h-full items-center justify-center">
                      <div className="rounded-full bg-white/80 p-4 shadow-lg backdrop-blur-sm">
                        <div className="text-primary">{doctor.icon}</div>
                      </div>
                    </div>

                    {/* Online status badge */}
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      Available
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold">
                    {doctor.specialization}
                  </p>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {doctor.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({doctor.patients}+ patients)
                    </span>
                  </div>

                  {/* Experience */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{doctor.experience} experience</span>
                  </div>

                  {/* Languages */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {doctor.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Education */}
                  <div className="mt-3 border-t border-gray-100 pt-3">
                    <p className="text-xs font-medium text-gray-500">Education</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {doctor.education.map((edu, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600"
                        >
                          • {edu}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability & CTA */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs">{doctor.availability}</span>
                    </div>
                    <button className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join our team banner */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-2xl">🏥</span>
              <span className="font-medium text-gray-700">
                Over 50+ specialists ready to provide exceptional care
              </span>
              <button className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-md transition-all hover:shadow-lg">
                View All Doctors →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;