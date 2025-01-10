import React from "react";

function RecommendedJobs() {
  const jobs = [
    { id: 1, company: "Paystack", title: "Product Analyst", location: "Lagos, Nigeria" },
    { id: 2, company: "Google", title: "HR Manager", location: "California, USA" },
    { id: 3, company: "Access Bank", title: "QA Engineer", location: "Abuja, Nigeria" },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Recommended Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded-md shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-500">{job.company}</p>
            <p className="text-sm text-gray-400">{job.location}</p>
            <button className="mt-4 bg-green-500 text-white py-1 px-4 rounded-md">
              Apply now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedJobs;
