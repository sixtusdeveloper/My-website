export default function TechEventHero() {
  return (
    <>
      <section className="relative w-full h-[350px] flex items-center md:justify-center justify-start text-center overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/tech-event-bg.avif')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl text-white">
            Unforgettable Events
          </h1>
          <p className="mt-4 text-base opacity-95 text-gray-100">
            Explore memories behind my software engineering and tech journey at
            large.
          </p>
          <a href="#tech-events">
            <button className="my-6 py-3 px-6 rounded-md font-semibold text-white hover:text-white dark:text-white text-base ring-2 ring-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-pink-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
              Explore Events
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
