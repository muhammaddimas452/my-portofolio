const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 px-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto gap-12"
    >
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="w-72 h-80 md:w-80 md:h-80 bg-[#161622] rounded-3xl border border-dashed border-gray-600 flex items-center justify-center text-gray-500 text-center p-4">
          <p>[Tempat Gambar 3D Duduk di Bintang]</p>
        </div>
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          Mahasiswa Sistem Informasi di Universitas Terbuka dengan latar belakang pendidikan SMK Rekayasa
          Perangkat Lunak. Memiliki pengalaman praktis sebagai Freelance Frontend Web Developer dan pernah
          menjalani magang di bidang Digital Marketing di PT EOA Gold. Mahir dalam menggunakan
          ReactJS/Vite, NextJS, Laravel, dan Tailwind CSS untuk membangun aplikasi web yang responsif. Saya
          adalah individu yang analitis, teliti, dan memiliki semangat belajar tinggi untuk berkontribusi dalam tim
          pengembangan teknologi.
        </p>

        <div className="flex gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white">5+</h3>
            <p className="text-xs text-gray-500">Education</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">-5</h3>
            <p className="text-xs text-gray-500">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">-</h3>
            <p className="text-xs text-gray-500">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
