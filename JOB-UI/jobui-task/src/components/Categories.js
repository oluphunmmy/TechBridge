import React from "react";

function Categories() {
  const categories = [
    { id: 1, name: "Oil and Gas", jobs: 32 },
    { id: 2, name: "Healthcare", jobs: 40 },
    { id: 3, name: "Education", jobs: 29 },
    { id: 4, name: "Accounting", jobs: 35 },
    { id: 5, name: "Design", jobs: 27 },
    { id: 6, name: "Technology", jobs: 42 },
    { id: 7, name: "Security", jobs: 15 },
    { id: 8, name: "Data Analyst", jobs: 18 },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="p-4 border rounded-md text-center shadow-md">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.jobs} jobs</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
