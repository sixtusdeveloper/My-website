import React from "react";

const MaterialsResources = () => {
  const resources = [
    {
      title: "JavaScript Mastery",
      category: "Web Development",
      desc: "An in-depth guide to JavaScript for all levels.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Python for Data Science",
      category: "Data Science",
      desc: "Learn Python for data analysis and visualization.",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "React.js Guide",
      category: "Frontend Development",
      desc: "Learn React.js from scratch.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section id="resources" className="w-full py-16 px-8 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-sm py-2">Category: {resource.category}</p>
              <p className="text-sm leading-snug">{resource.desc}</p>
              <p className="text-yellow-500 text-lg">{resource.rating}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Check Out
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsResources;
