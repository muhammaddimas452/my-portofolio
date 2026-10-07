import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 px-6 max-w-5xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
        My Projects
      </h2>
      <p className="text-gray-500 text-sm mb-12 text-center">
        A showcase of my recent work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Project Card 1 */}
        <div className="bg-[#111118] border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-gray-600 transition-all duration-300">
          <div className="h-48 bg-[#161622] flex items-center justify-center text-gray-500 border-b border-gray-800">
            <img
              src={project1}
              alt="foto project1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Money Tracking Web
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Aplikasi manajemen keuangan pribadi (personal finance) berbasis
              web yang berfungsi sebagai asisten digital untuk mencatat,
              melacak, dan menganalisis arus uang Anda.
            </p>
            <a
              href="https://mooney-three.vercel.app/"
              className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white hover:scale-105 transition-transform"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-[#111118] border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-gray-600 transition-all duration-300">
          <div className="h-48 bg-[#161622] flex items-center justify-center text-gray-500 border-b border-gray-800">
            <img
              src={project2}
              alt="foto project1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              E-Commerce & Order Tracking Platform
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Business Process Management (BPM) berbasis web yang dirancang
              khusus untuk mendigitalisasi operasional UMKM kuliner, mengambil
              studi kasus pada Warung Nasi Padang Minang.
            </p>
            <a
              href="https://warung-padang-omega.vercel.app/"
              className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white hover:scale-105 transition-transform"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
