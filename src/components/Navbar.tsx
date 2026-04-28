import { useState, type JSX } from "react";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold text-primary">HeartCare</h1>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>

        <ul className={`md:flex gap-6 ${open ? "block" : "hidden"}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;