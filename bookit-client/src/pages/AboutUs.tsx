const About = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">About Highway Delite</h1>
          <p className="text-lg text-gray-300">
            India’s trusted highway travel companion, connecting travelers,
            experiences, and the open road.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&q=80"
          alt="Highway Journey"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in Bangalore, Highway Delite is India’s first travel-tech
            startup focused on making highway journeys safer, smarter, and more
            enjoyable. From verified pit stops to curated travel experiences,
            we’re redefining how India explores its highways.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple — to empower travelers with real-time
            information, comfort, and trust on every road trip.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">2015</h3>
            <p className="text-gray-300 mt-2">Founded in Bangalore</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">10,000+</h3>
            <p className="text-gray-300 mt-2">Trips Facilitated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
            <p className="text-gray-300 mt-2">Partner Stops & Experiences</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
