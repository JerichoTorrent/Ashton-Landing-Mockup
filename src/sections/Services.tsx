const Services = () => {
  const services = [
    { icon: "🏢", title: "Real Estate Financing" },
    { icon: "💼", title: "Business Loans" },
    { icon: "🚀", title: "Startup Funding" },
    { icon: "💳", title: "Merchant Advances" }
  ];

  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What We Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Additional info box with image */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto text-left">
          <div>
            <p className="text-gray-300 leading-relaxed">
              At <span className="text-white font-semibold">Ashton & Co. Commercial Brokers</span>, we provide direct access to capital for real estate, business expansion, and equipment acquisition.
              Our services include commercial real estate financing, business loans, equipment financing, startup funding, merchant cash advances, and franchise financing—tailored solutions to meet the capital needs of growing businesses.
            </p>
          </div>
          <div>
            <img
              src="/assets/real-estate.webp"
              alt="Real estate financing"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
