import React from "react";

function HowItWorks() {
  const steps = [
    { id: 1, title: "Search Jobs", description: "Browse jobs in popular industries and locations.", icon: "🔍" },
    { id: 2, title: "Create a Profile", description: "Showcase your skills to employers.", icon: "📝" },
    { id: 3, title: "Apply for Jobs", description: "Submit your applications quickly and easily.", icon: "🚀" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.id} className="p-4 text-center border rounded-md shadow-md">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
