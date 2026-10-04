import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 px-6 max-w-5xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
        Contact Me
      </h2>
      <p className="text-gray-500 text-sm mb-12 text-center">
        Let's discuss your next project or just say hi
      </p>

      {/* Kotak Utama */}
      <div className="flex flex-col md:flex-row gap-10 w-full bg-[#111118] border border-gray-800 rounded-3xl p-8 shadow-lg">
        {/* Bagian Kiri: Informasi Kontak */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get in touch</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            I'm currently open for a digital transformation internship,
            freelance projects, or full-time opportunities. Feel free to reach
            out and let's build something amazing together!
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full text-white">
              <FaEnvelope size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-white hover:text-gray-300 cursor-pointer">
                hello@portofolio.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full text-white">
              <FaMapMarkerAlt size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium text-white">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Form Input */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-4">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-4">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-4">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            {/* Tombol Gradient Abu-Putih */}
            <button
              type="button"
              className="w-full mt-2 bg-gradient-to-r from-gray-500 to-gray-100 text-black py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(156,163,175,0.2)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
