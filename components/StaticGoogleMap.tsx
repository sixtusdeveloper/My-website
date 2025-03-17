import React from "react";
import Image from "next/image";

const StaticGoogleMap = () => {
  const address = "Plot 39, Awolowo Road, Ikoyi, Lagos, Nigeria";
  const encodedAddress = encodeURIComponent(address);
  const googleMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7C${encodedAddress}&key=YOUR_GOOGLE_MAPS_API_KEY`;

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        My Location
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl">
        Visit me at my residence located at <strong>{address}</strong>. Below is
        a map showing my exact location.
      </p> */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
        <Image
          src={googleMapUrl}
          alt="Google Map Location"
          width={800}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Map provided by Google Maps. Interactive version coming soon.
      </p>
    </section>
  );
};

export default StaticGoogleMap;
