const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505238680356-667803448bb6?w=1920&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300">
            Have questions, feedback, or partnership ideas? We’d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Send us a message
          </h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/50"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="text-center mt-16 text-gray-700">
          <h3 className="text-xl font-semibold mb-2">📍 Highway Delite HQ</h3>
          <p>Bangalore, Karnataka, India</p>
          <p className="mt-2">📧 contact@highwaydelite.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
