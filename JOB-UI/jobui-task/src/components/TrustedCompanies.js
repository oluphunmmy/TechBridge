import React from "react";

function TrustedCompanies() {
  const companies = [
    "Uber",
    "Zapier",
    "Google",
    "Airtel",
    "McKinsey",
    "Accenture",
  ];

  return (
    <section className="py-12 px-4 bg-green-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Over 1000+ jobs from top companies in our network
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((company, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md">
            <img src={`/${company.toLowerCase()}.png`} alt={company} className="h-8" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;
