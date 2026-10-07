import { useState, useEffect } from "react";

const Navbar = () => {
  // 1. State untuk menyimpan section mana yang sedang aktif
  const [activeSection, setActiveSection] = useState("home");

  // 2. useEffect untuk memantau posisi scroll layar
  useEffect(() => {
    const handleScroll = () => {
      // Urutan section dari atas ke bawah
      const sections = ["home", "about", "skills", "projects", "contact"];
      let currentSection = "home";

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          // Angka 150 adalah offset toleransi agar tidak perlu menunggu
          // section benar-benar mentok di atas layar untuk berubah aktif
          if (window.scrollY >= sectionTop - 150) {
            currentSection = sections[i];
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Tambahkan event listener saat user melakukan scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener ketika komponen tidak digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3. Fungsi kecil untuk mempermudah penulisan class Tailwind (Styling Kondisional)
  const getLinkClass = (sectionName) => {
    return `transition-all duration-300 ${
      activeSection === sectionName
        ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" // Style jika Aktif
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" // Style jika Tidak Aktif
    }`;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-[#111118]/60 backdrop-blur-xl rounded-full px-6 py-3 flex justify-between items-center z-50 border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.03)] transition-all duration-300">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold text-xl tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        Portfolio.
      </div>

      {/* 4. Terapkan fungsi getLinkClass pada masing-masing menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#home" className={getLinkClass("home")}>
          Home
        </a>
        <a href="#about" className={getLinkClass("about")}>
          About
        </a>
        <a href="#skills" className={getLinkClass("skills")}>
          Skills
        </a>
        <a href="#projects" className={getLinkClass("projects")}>
          Projects
        </a>
        <a href="#contact" className={getLinkClass("contact")}>
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative group overflow-hidden bg-gradient-to-r from-gray-400 to-white text-black px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          <a href="#contact" className="relative z-10">
            Hire Me
          </a>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
