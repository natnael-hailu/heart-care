import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  department: string;
  doctor: string;
  message: string;
}

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = [
    "General Cardiology",
    "Cardiac Surgery",
    "Pediatric Cardiology",
    "Electrophysiology",
    "Diagnostic Services",
  ];

  const doctors = [
    "Dr. Samuel Bekele",
    "Dr. Helen Tadesse",
    "Dr. Yonas Desta",
    "Dr. Mulugeta Alemu",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.date) newErrors.date = "Preferred date is required";
    if (!form.department) newErrors.department = "Please select a department";
    if (!form.doctor) newErrors.doctor = "Please select a doctor";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
        doctor: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-form {
            animation: slideInFromRight 0.6s ease-out forwards;
          }
          .animate-info {
            animation: fadeInScale 0.6s ease-out 0.2s forwards;
            opacity: 0;
          }
        `}
      </style>

      <section
        id="appointment"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 md:py-32"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <span className="mr-2">📅</span>
              Schedule Your Visit
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Appointment
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Take the first step toward better heart health. Our team is ready
              to provide you with exceptional care.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Side - Information Panel - NOW READABLE */}
            <div className="animate-info">
              <div className="sticky top-8 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary p-8 shadow-2xl">
                <h3 className="mb-4 text-2xl font-bold text-white">Why Choose Us?</h3>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-white/20 p-2">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">World-class cardiologists</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-white/20 p-2">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-white">Minimal waiting time</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-white/20 p-2">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-white">Advanced medical technology</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-white/20 p-2">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-white">Compassionate patient care</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="mb-3 font-semibold text-white">Contact Info</h4>
                  <div className="space-y-2 text-sm text-white">
                    <div className="text-white/95">📞 +251 11 123 4567</div>
                    <div className="text-white/95">✉️ appointments@cardiohealth.com</div>
                    <div className="text-white/95">📍 Bole Road, Addis Ababa, Ethiopia</div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-white">4.9 (1,250+ reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form - Dark Themed */}
            <div className="animate-form">
              <div className="rounded-2xl bg-slate-800/90 p-8 shadow-xl backdrop-blur-sm border border-slate-700">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Schedule Your Visit
                </h3>

                {submitSuccess ? (
                  <div className="rounded-lg bg-green-900/50 p-6 text-center border border-green-500/30">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/70">
                      <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-green-400">
                      Appointment Request Sent!
                    </h4>
                    <p className="text-green-300">
                      We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                          errors.name ? "border-red-500" : "border-slate-700"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email & Phone - Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.email ? "border-red-500" : "border-slate-700"
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-300">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.phone ? "border-red-500" : "border-slate-700"
                          }`}
                          placeholder="+251 9XX XXX XXX"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Date & Department */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-300">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.date ? "border-red-500" : "border-slate-700"
                          }`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-xs text-red-400">{errors.date}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-slate-300">
                          Department *
                        </label>
                        <select
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                            errors.department ? "border-red-500" : "border-slate-700"
                          }`}
                        >
                          <option value="" className="bg-slate-900">Select department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept} className="bg-slate-900">
                              {dept}
                            </option>
                          ))}
                        </select>
                        {errors.department && (
                          <p className="mt-1 text-xs text-red-400">{errors.department}</p>
                        )}
                      </div>
                    </div>

                    {/* Doctor Selection */}
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-300">
                        Preferred Doctor *
                      </label>
                      <select
                        name="doctor"
                        value={form.doctor}
                        onChange={handleChange}
                        className={`w-full rounded-lg bg-slate-900 border p-3 transition-all text-white focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                          errors.doctor ? "border-red-500" : "border-slate-700"
                        }`}
                      >
                        <option value="" className="bg-slate-900">Select doctor</option>
                        {doctors.map((doc) => (
                          <option key={doc} value={doc} className="bg-slate-900">
                            {doc}
                          </option>
                        ))}
                      </select>
                      {errors.doctor && (
                        <p className="mt-1 text-xs text-red-400">{errors.doctor}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-300">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 transition-all text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Any specific concerns or preferences..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="h-5 w-5 animate-spin"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Book Appointment"
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      We respect your privacy. Your information is secure with us.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}