import { useState } from "react";
import LoanHighlights from "./LoanHighlights";

const industries = [
  "Adult", "Advertising", "Aerospace / Defense", "Agriculture", "Apparel", "Auction", "Auto",
  "Auto Repair", "Auto Sales", "Aviation", "Banking", "Bar / Nightclub", "Beauty / Nail Salon",
  "Biotechnology", "Broker / Re-Sellers - Coin, Ticket, Pawn Shop", "Business Services", "Call Center",
  "Cannabis", "Car Rental", "Casino / Gambling / Sports Clubs", "Cell Phone Sales", "Chemicals",
  "Cleaning", "Communications", "Construction", "Consulting", "Contractor - General", "Contractor - Painting",
  "Contractor - Paving", "Contractor - Plumbing", "Contractor - Roofing", "Convenience Store", "Courier Service",
  "Day Care / Child Care", "Dental", "Design", "Detective", "Dry Cleaner",
  "E-Commerce - No Inventory / Drop Shipping", "Education", "Electrician", "Electronics", "Electronic Sales",
  "Energy", "Engineering", "Entertainment", "Environmental", "Environmental Services", "Equipment Rental",
  "Equipment Sales", "Equipment Service / Repair", "Farming / Agriculture", "Finance",
  "Financial - Collection / Money Services", "Financial Services", "Fire Arms / Ammunition",
  "Fitness Center", "Florist", "Food / Beverage", "Fuel Delivery", "Funeral Home", "Furniture Store",
  "Gas Station", "Government", "Grocery Store", "Healthcare", "Home Healthcare", "Hospitality",
  "HVAC", "Import / Export", "Insurance", "Janitorial", "Junk Yard", "Landscaping",
  "Legal Services / Law Firm", "Liquor Store", "Logging", "Machinery", "Manufacturing",
  "Marketing", "Massage Therapy", "Media", "Medical", "Medical Spa", "Medical Training",
  "Mineral / Oil Mining Exploration", "Non for Profit", "Not For Profit", "Nursery",
  "Optometrist", "Other", "Pest Control", "Pet Groomer", "Pharmacy", "Photography",
  "Plastic Surgeon", "Plumbing", "Primary Care", "Printing", "Professional Services",
  "Property Management", "Real Estate", "Recreation", "Religious Institute", "Restaurant",
  "Retail", "Salon", "School/Education", "Security", "Shipping", "Sign Language Interpretation",
  "Smoke / Tobacco / Vape shops", "Staffing", "Storage", "Technology", "Telecommunications",
  "Towing", "Transportation", "Travel", "Trucking", "Uber / Lyft / Taxi", "Utilities",
  "Veterinarian", "Waste Management", "Wholesale / Distributor", "Window Tinting"
];

const timeInBusiness = [
  "Less Than 6 Months", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years",
  "7 Years", "8 Years", "9 Years", "10 or more years"
];

const annualSales = [
  "Under $50,000", "$50,000 - 120,000", "$120,000 - $360,000", "$360,000 - $1,000,000",
  "$1,000,000 - $1,800,000", "$1,800,000 - $3,000,000", "$3,000,000 +"
];

const products = [
  "Working Capital", "Line of Credit", "SBA", "AR / Factoring", "Commercial Real Estate",
  "Equipment Financing", "Purchase Order Financing", "Inventory Financing", "Residential Investment Property"
];

const Apply = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-52 bg-[#0d0d0d] text-white min-h-screen px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Business Loan Online Application
          </h1>
          <ul className="text-gray-300 space-y-2 text-lg">
            <li>✓ Same Day Funding</li>
            <li>✓ $10,000 - $5 Million</li>
            <li>✓ 6 Months to 10 Year Terms</li>
          </ul>
          <img
            src="/assets/positivessl.webp"
            alt="PositiveSSL Secure"
            className="w-40 mt-4"
          />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] rounded-lg p-4 space-y-6 shadow-xl"
        >
          <input type="hidden" name="access_key" value="9bbfeaf5-52b0-453e-8776-ea7462974832" />

          {/* Input Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="first_name" required placeholder="First Name" className="input-style" />
            <input name="last_name" required placeholder="Last Name" className="input-style" />
            <input name="business_name" required placeholder="Business Name" className="input-style" />
            <input name="email" type="email" required placeholder="Email Address" className="input-style" />
            <input name="business_phone" type="tel" required placeholder="Business Phone" className="input-style" />
            <input name="mobile_phone" type="tel" required placeholder="Mobile Phone" className="input-style" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="credit_score" required className="input-style">
              <option value="" disabled selected>Credit Score</option>
              <option>720+</option>
              <option>680 - 719</option>
              <option>650 - 679</option>
              <option>600 - 649</option>
              <option>599 or Below</option>
            </select>

            <select name="industry" required className="input-style">
              <option value="" disabled selected>Industry</option>
              {industries.map((ind) => (
                <option key={ind}>{ind}</option>
              ))}
            </select>

            <select name="time_business" required className="input-style">
              <option value="" disabled selected>Time in Business</option>
              {timeInBusiness.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <select name="annual_sales" required className="input-style">
              <option value="" disabled selected>Annual Sales</option>
              {annualSales.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <select name="product" required className="input-style w-full">
            <option value="" disabled selected>Product</option>
            {products.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          {/* Success/Error */}
          {status === "success" && (
            <p className="text-green-400 font-semibold">Your application has been submitted!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-semibold">Something went wrong. Please try again later.</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#e50914] hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
      <LoanHighlights />
    </div>
  );
};

export default Apply;