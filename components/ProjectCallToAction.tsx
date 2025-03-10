const ExploreMoreCallToAction = () => {
  return (
    <>
      <section
        id="projects"
        className="relative w-full h-[400px] flex items-center md:justify-center justify-start text-center overflow-hidden"
      >
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/coding-guy.png')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-16 lg:pr-8 md:text-center text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl text-white">
            See how I transform ideas into reality!
          </h1>
          <p className="mt-4 text-base opacity-95 text-gray-100">
            Explore my project section and see how I turn ideas into reality.
          </p>
          <a href="#all-projects">
            <button
              type="button"
              className="flex justify-start items-center lg:mx-auto lg:justify-center text-left lg:text-center mt-6 py-3 px-6 text-base font-semibold rounded-md ring-2 ring-pink-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:bg-yellow-600 text-white shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Explore projects
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default ExploreMoreCallToAction;
