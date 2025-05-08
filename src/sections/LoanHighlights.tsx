const LoanHighlights = () => {
  const blocks = [
    {
      img: "/assets/application.png",
      title: "Simple Application",
      text: <>Our simple <strong>15 second</strong> online application can get you matched with offers in Minutes.</>,
    },
    {
      img: "/assets/fico.png",
      title: "No Minimum FICO",
      text: <>
        <strong>Bad Credit?</strong> No Problem! Most of our top financing options have no minimum FICO.
      </>,
    },
    {
      img: "/assets/money-xxl.png",
      title: "Larger Amounts",
      text: <>Get matched with the best financing options with the <strong>Highest Offer $</strong> Funding Amount</>,
    },
    {
      img: "/assets/money.png",
      title: "Same Day Funding",
      text: <>Our <strong>Fintech Speed</strong> can get you in and out of Underwriting in just a few hours, and same day funding!</>,
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] p-6 shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition"
          >
            <img
              src={block.img}
              alt={block.title}
              className="w-16 h-16 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{block.title}</h3>
            <p className="text-sm text-white">{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanHighlights;