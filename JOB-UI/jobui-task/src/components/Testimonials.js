import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Imo Black",
      role: "HR Manager at MasterCard",
      feedback: "The platform is very convenient for reaching out to companies.",
      image: "/customer1.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Data Analyst",
      feedback: "I landed my dream job thanks to GetAJob!",
      image: "/customer2.png",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Are Saying</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 border rounded-md shadow-md text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-16 w-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            <h3 className="font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
