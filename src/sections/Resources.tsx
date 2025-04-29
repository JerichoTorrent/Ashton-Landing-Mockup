import { motion } from "framer-motion";

const faqSections = [
  {
    title: "General FAQ",
    items: [
      ["Who is Ashton & Co.?", "Ashton & Co. is a trusted commercial brokerage that helps businesses access the capital they need to grow—offering funding solutions across real estate, operations, and expansion."],
      ["How do I choose the right loan for my business?", "Our financing specialists evaluate your revenue, industry, and goals to recommend the best-fit solution for your unique situation."],
      ["How do I apply for funding?", "Start with our simple online application. After submitting basic business and financial info, a dedicated advisor will reach out to guide you forward."],
      ["Will applying hurt my credit?", "We begin with a soft credit check that doesn't impact your score. A hard pull may be required during final underwriting."],
      ["Are there any upfront fees?", "No application fees. Total costs depend on your loan’s structure and the selected lender’s terms."],
      ["How is Ashton & Co. different from a traditional bank?", "We deliver faster decisions, flexible options, and broader approval opportunities compared to conventional banks."],
      ["Is my information secure?", "Yes—your data is protected with advanced encryption and industry-standard security protocols."],
      ["Do multiple applications affect my credit?", "No, unless a hard credit pull is performed, your credit score will not be impacted."],
      ["What types of funding are available?", "We provide: term loans, SBA loans, lines of credit, equipment financing, invoice factoring, working capital loans, merchant cash advances, and commercial real estate loans."],
      ["What are the minimum qualifications?", "Typically, 4+ months in business, $10,000+ in monthly revenue, and a credit score of 600 or higher."],
      ["How quickly can I be approved?", "Depending on the product, approvals can arrive within hours."],
      ["What documents are needed to apply?", "Expect to provide bank statements, tax returns, and proof of business ownership."],
      ["Can startups qualify?", "Yes, startups may be eligible for specific solutions like SBA loans, lines of credit, or equipment financing."],
      ["Do you work with all industries?", "Yes—we serve a broad range of sectors including retail, healthcare, construction, and more."],
      ["Will a credit check be required?", "Some options use soft pulls; others may need full reports depending on the lender."],
      ["How can I improve my credit for better terms?", "On-time payments, reduced debt, and low credit utilization help improve your score."]
    ]
  },
  {
    title: "Term Loans",
    items: [
      ["What’s a term loan?", "A lump sum of capital repaid over time with scheduled payments—ideal for long-term investments."],
      ["Required credit score?", "600+ is preferred, but other options exist for lower scores."],
      ["Repayment terms?", "Usually range from 1 to 10 years, depending on the loan."],
      ["Can I repay early?", "Yes, but some lenders may charge early payoff fees. Check your terms."]
    ]
  },
  {
    title: "SBA Loans",
    items: [
      ["Which SBA loans do you offer?", "SBA 7(a), SBA 504, and SBA Express loans."],
      ["How long is the process?", "Between 30 to 90 days, depending on documentation and loan type."],
      ["Can SBA loans fund a new business?", "Yes, but strong credit and collateral may be required."],
      ["SBA eligibility?", "Typically 2+ years in business, 650+ credit score, and stable finances."],
      ["Difference between 7(a) and 504?", "7(a): Working capital & growth. 504: Fixed assets like real estate or equipment."]
    ]
  },
  {
    title: "Lines of Credit",
    items: [
      ["How does it work?", "Access funds up to a set limit and only pay interest on what you use."],
      ["Typical interest rate?", "Varies between 7% to 25%, based on creditworthiness."],
      ["How is it different from a term loan?", "A term loan is a lump sum with fixed terms; a line of credit offers ongoing access to funds."],
      ["Can I use it multiple times?", "Yes—draw funds as needed within your limit."]
    ]
  },
  {
    title: "Equipment Financing",
    items: [
      ["What can be financed?", "Machinery, vehicles, tech, and more."],
      ["Used equipment eligible?", "Yes, if it meets specific standards."],
      ["Is collateral required?", "Usually the equipment itself serves as collateral."],
      ["What if equipment fails?", "You’re still obligated to pay. Consider warranties or service plans."]
    ]
  },
  {
    title: "Invoice Financing",
    items: [
      ["How does it work?", "You sell outstanding invoices to a lender at a discount for fast access to cash."],
      ["Funding speed?", "Typically within 24–48 hours."],
      ["Advance percentage?", "Usually 80–90% of the invoice value."],
      ["What if the customer doesn’t pay?", "Liability depends on the agreement (recourse vs. non-recourse)."]
    ]
  },
  {
    title: "Commercial Real Estate Loans",
    items: [
      ["What properties qualify?", "Office buildings, retail spaces, industrial properties, and multifamily units."],
      ["Renovation funding?", "Yes—many CRE loans support property improvements."],
      ["Repayment terms?", "Usually 5 to 25 years."],
      ["Is a down payment required?", "Yes, typically 10–30%."]
    ]
  },
  {
    title: "Working Capital Loans",
    items: [
      ["What can they fund?", "Day-to-day operations like payroll, rent, and supplies."],
      ["Repayment schedule?", "Varies by lender—daily, weekly, or monthly options."],
      ["How soon can I receive funds?", "As fast as 24 hours."]
    ]
  }
];

const Resources = () => {
    return (
      <section className="bg-[#0d0d0d] pt-48 pb-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
  
          {/* Intro Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#e50914] leading-tight">
                Ashton & Co. FAQ
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                If you're exploring funding options for your business, this guide will help you learn about our services and how we can help fuel your growth.
              </p>
            </div>
  
            {/* Image */}
            <motion.img
              src="/assets/business-financing-advisor.png"
              alt="Business Financing Advisor"
              className="rounded-lg shadow-lg w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
  
          {/* FAQ Sections */}
          {faqSections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{section.title}</h2>
              <ul className="space-y-6 text-gray-300">
                {section.items.map(([question, answer], i) => (
                  <li key={i}>
                    <p className="font-semibold text-white mb-1">{question}</p>
                    <p className="text-gray-400">{answer}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
  
          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="/apply"
              className="inline-block bg-[#e50914] hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            >
              Start My Application
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Resources;