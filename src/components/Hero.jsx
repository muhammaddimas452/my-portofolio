import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import heroImage from "../assets/hero-image.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 px-6 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12"
    >
      <div className="flex-1 w-full text-left">
        <div className="flex gap-4 mb-6 text-gray-400">
          <a href="https://www.instagram.com/m_dimas_33/">
            <FaInstagram
              className="hover:text-white cursor-pointer"
              size={24}
            />
          </a>
          <a href="">
            <FaTiktok className="hover:text-white cursor-pointer" size={24} />
          </a>
          <a href="https://github.com/muhammaddimas452">
            <FaGithub className="hover:text-white cursor-pointer" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-dimas23/">
            <FaLinkedin className="hover:text-white cursor-pointer" size={24} />
          </a>
        </div>

        <h1 className="text-4xl md:text-[56px]/[4rem] font-bold text-white mb-6">
          Hi, I'm Muhammad Dimas Wakhid Wijaya
        </h1>

        <div className="flex flex-wrap gap-4">
          <div className="relative group overflow-hidden bg-gradient-to-r from-gray-400 to-white text-black px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="relative z-10 flex items-center gap-2"
            >
              <FaCloudDownloadAlt size={16} />
              Download CV
            </a>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out"></div>
          </div>
          <a
            href="#contact"
            className="border border-gray-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <FaEnvelope size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Bagian Kanan: GAMBAR FUTURISTIK */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        {/* 1. PEMBUNGKUS LUAR (Efek Border Gradient & Glow Putih) 
      group: digunakan agar saat kotak ini disentuh, elemen di dalamnya ikut berubah 
  */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-gray-200 via-gray-700 to-black shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-shadow duration-500 group cursor-pointer">
          {/* 2. PEMBUNGKUS DALAM (Memotong gambar sesuai bentuk lengkung) */}
          <div className="w-72 h-80 md:w-96 md:h-96 rounded-[22px] overflow-hidden bg-[#111118] relative">
            {/* 3. GAMBAR (Efek Grayscale ke Berwarna & Zoom Interaktif) */}
            <img
              src={heroImage}
              alt="Foto Profil"
              className="w-full h-full object-cover object-bottom scale-150 group-hover:scale-125 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />

            {/* 4. OVERLAY GRADIENT BAWAH (Efek fading/menghilang ke dalam kegelapan) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
