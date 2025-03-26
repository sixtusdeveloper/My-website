import React from "react";

const StaticGoogleMap = () => {
  const latitude = 6.448292; // Precise Latitude
  const longitude = 3.42338; // Precise Longitude
  const zoom = 10; // Zoom in for better visibility
  const mapWidth = 650;
  const mapHeight = 250;

  // Corrected Yandex Static Map URL with English labels and precise coordinates
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=${zoom}&size=${mapWidth},${mapHeight}&l=map&pt=${longitude},${latitude},pm2rdl&lang=en_US`;

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
        <img
          src={mapUrl}
          alt="Static Map Location"
          className="w-full h-auto"
          style={{ maxHeight: "550px" }}
        />
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Map provided by Yandex Maps. Interactive version coming soon.
      </p>
    </section>
  );
};

export default StaticGoogleMap;
