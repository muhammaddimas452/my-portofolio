import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 px-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto gap-12"
    >
      {/* Bagian Kiri: Gambar Modern */}
      <div className="flex-1 flex justify-center md:justify-start">
        {/* Frame luar dengan efek border gradient dan glow */}
        <div className="relative group w-72 h-80 md:w-80 md:h-80 rounded-3xl p-[2px] bg-gradient-to-br from-gray-500 via-gray-700 to-[#08080c] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 cursor-pointer hover:-translate-y-2">
          {/* Frame dalam untuk memotong gambar (rounded) */}
          <div className="w-full h-full bg-[#111118] rounded-[22px] overflow-hidden relative">
            <img
              src={aboutImage}
              alt="Profile About"
              className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            {/* Overlay gradient gelap di bawah gambar agar menyatu dengan background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>

      {/* Bagian Kanan: Teks & Statistik */}
      <div className="flex-1 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 text-justify">
          Mahasiswa Sistem Informasi di Universitas Terbuka dengan latar
          belakang pendidikan SMK Rekayasa Perangkat Lunak. Memiliki pengalaman
          praktis sebagai Freelance Frontend Web Developer dan pernah menjalani
          magang di bidang Digital Marketing di PT EOA Gold. Mahir dalam
          menggunakan{" "}
          <span className="text-gray-200 font-semibold">
            ReactJS/Vite, NextJS, Laravel, dan Tailwind CSS
          </span>{" "}
          untuk membangun aplikasi web yang responsif. Saya adalah individu yang
          analitis, teliti, dan memiliki semangat belajar tinggi untuk
          berkontribusi dalam tim pengembangan teknologi.
        </p>

        {/* Bagian Statistik Dibuat Menjadi Bentuk Box Modern */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-[#111118] border border-gray-800 px-5 py-4 rounded-2xl flex-1 min-w-[110px] text-center hover:bg-gray-800/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              1+
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Years Experience
            </p>
          </div>

          <div className="bg-[#111118] border border-gray-800 px-5 py-4 rounded-2xl flex-1 min-w-[110px] text-center hover:bg-gray-800/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              5+
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Projects Done
            </p>
          </div>

          <div className="bg-[#111118] border border-gray-800 px-5 py-4 rounded-2xl flex-1 min-w-[110px] text-center hover:bg-gray-800/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              4+
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              Tech Stacks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
