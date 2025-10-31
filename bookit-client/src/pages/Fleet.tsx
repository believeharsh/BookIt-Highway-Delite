const Fleet = () => {
  const fleet = [
    {
      name: "Premium SUV",
      image:
        "https://images.unsplash.com/photo-1617814076810-6e7d5e4c0702?w=800&q=80",
      desc: "Comfortable SUVs perfect for family trips and long highway drives.",
    },
    {
      name: "Luxury Sedan",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      desc: "Smooth, stylish rides for business or city escapes.",
    },
    {
      name: "Tempo Traveler",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      desc: "Ideal for group tours, team trips, and long adventures together.",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center text-center bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
            alt="Fleet"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-lg text-gray-200">
            Choose from a range of comfortable and reliable vehicles for your
            next highway journey.
          </p>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        {fleet.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Fleet;
