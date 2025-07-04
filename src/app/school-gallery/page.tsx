'use client';

import Image from 'next/image';

const SchoolGallery = () => {
  // Organized by campus with error handling
  const campusGalleries = [
    {
      name: "CBC Campus",
      images: [
        '/gallery/cbc-campus-1.jpeg',
        '/gallery/cbc-campus-2.jpeg',
        '/gallery/cbc-campus-3.jpeg',
        
      ]
    },
    {
      name: "Cambridge Campus",
      images: [
        '/gallery/cambridge-campus-1.jpeg',
        '/gallery/cambridge-campus-2.jpeg',
        '/gallery/cambridge-campus-3.jpeg',
      ]
    },
    {
      name: "Teachers Training College",
      images: [
        '/gallery/ttc-campus-1.jpeg',
      ]
    }
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">School Gallery</h2>
      
      {campusGalleries.map((campus, campusIndex) => (
        <div key={campusIndex} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
            {campus.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campus.images.map((src, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-3"> {/* Maintain 4:3 aspect ratio */}
                  <Image
                    src={src}
                    alt={`${campus.name} image ${index + 1}`}
                    width={500}
                    height={375}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error(`Failed to load image: ${src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolGallery;