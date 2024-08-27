import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Example project */}
          <div className="p-4 bg-secondary rounded-lg shadow">
            <h3 className="text-xl font-bold">Open Source Contribution</h3>
            <p className="mt-2 text-sm text-gray-600">Contributed to the XYZ open-source project by enhancing its UI/UX and optimizing performance.</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg shadow">
            <h3 className="text-xl font-bold">Open Source Contribution</h3>
            <p className="mt-2 text-sm text-gray-600">Contributed to the XYZ open-source project by enhancing its UI/UX and optimizing performance.</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg shadow">
            <h3 className="text-xl font-bold">Open Source Contribution</h3>
            <p className="mt-2 text-sm text-gray-600">Contributed to the XYZ open-source project by enhancing its UI/UX and optimizing performance.</p>
          </div>
          <div className="p-4 bg-secondary rounded-lg shadow">
            <h3 className="text-xl font-bold">Open Source Contribution</h3>
            <p className="mt-2 text-sm text-gray-600">Contributed to the XYZ open-source project by enhancing its UI/UX and optimizing performance.</p>
          </div>
          {/* More projects here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
