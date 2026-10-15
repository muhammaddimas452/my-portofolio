import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' atau 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    // Ganti string di bawah dengan ID dari akun EmailJS kamu!
    const serviceID = "service_q5ck3bh";
    const templateID = "template_a3oly1s";
    const publicKey = "FDvGIDVcT7vgOb9K_";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setIsSending(false);
        setSubmitStatus("success");
        form.current.reset(); // Kosongkan form setelah berhasil

        // Hilangkan notifikasi sukses setelah 5 detik
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      (error) => {
        setIsSending(false);
        setSubmitStatus("error");
        console.log(error.text);
      },
    );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 px-6 max-w-5xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
        Contact Me
      </h2>
      <p className="text-gray-500 text-sm mb-12 text-center">
        Let's discuss your next project or internship opportunity
      </p>

      <div className="flex flex-col md:flex-row gap-10 w-full bg-[#111118] border border-gray-800 rounded-3xl p-8 shadow-lg">
        {/* Bagian Kiri: Informasi Kontak */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h3 className="text-2xl font-bold text-white mb-2">Get in touch</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Saya sangat terbuka untuk peluang magang, proyek kolaborasi, maupun
            diskusi seputar pengembangan teknologi dan digital transformation.
            Silakan kirim pesan melalui form ini!
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full text-white">
              <FaEnvelope size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-white">
                emailkamu@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="bg-gray-800 p-3 rounded-full text-white">
              <FaMapMarkerAlt size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium text-white">Indonesia</p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Form Input Terintegrasi EmailJS */}
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name" // Name atribut WAJIB sesuai variabel template EmailJS
                required
                placeholder="John Doe"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email" // Name atribut WAJIB sesuai variabel
                required
                placeholder="john@example.com"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                name="message" // Name atribut WAJIB sesuai variabel
                required
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-[#161622] border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gray-400 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            {/* Tombol dengan indikator loading */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full mt-2 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(156,163,175,0.2)] flex justify-center items-center gap-2
                ${
                  isSending
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-500 to-gray-100 text-black hover:scale-[1.02]"
                }
              `}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Notifikasi Status Pesan */}
            {submitStatus === "success" && (
              <p className="text-green-400 text-sm text-center mt-2 font-medium">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-sm text-center mt-2 font-medium">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
