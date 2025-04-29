import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) setSubmitted(true);
  };

  return (
    <section className="bg-[#0d0d0d] pt-48 pb-24 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e50914] mb-6">Contact Us</h1>
          <p className="text-gray-300 mb-8">
            Reach out with your questions, ideas, or project inquiries. We're here to help.
          </p>

          {submitted ? (
            <p className="text-green-500">Thanks for reaching out! We'll be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="9bbfeaf5-52b0-453e-8776-ea7462974832" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 h-36 rounded bg-[#1a1a1a] border border-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-[#e50914] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        <div className="text-gray-400 text-sm leading-relaxed">
          <h2 className="text-white font-semibold text-lg mb-4">Our Office</h2>
          <p>6580 E Mcdowell Rd Unit #1526<br />Scottsdale, AZ 85257</p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Working Hours</h2>
          <p>9AM – 6PM, Mon–Fri</p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Contact</h2>
          <p>
            <a href="mailto:Harold@ashtonbrokers.com" className="text-white underline">
              Harold@ashtonbrokers.com
            </a>
            <br />
            (602) 206 0937
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;