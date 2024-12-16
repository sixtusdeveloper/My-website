'use client';

import React, { useState, useRef, useEffect } from 'react';
import Modal from '@/components/ui/ServicesModal';
import { services } from '@/data';
import { Button } from '@/components/ui/MovingBorder';
import Image from 'next/image';
import Loader from '@/components/ui/Loader';

// Truncate the Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 75;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for full-page loader
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useRef(0);

  const openModal = (serviceItem: Service) => {
    setIsLoading(true); // Show the full-page loader
    setSelectedService(serviceItem);

    // Simulate a delay for the loading state
    setTimeout(() => {
      scrollPosition.current = window.scrollY;
      setIsModalOpen(true);
      setIsLoading(false); // Hide the full-page loader
    }, 2000); // Adjust the delay as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);

    window.scrollTo({
      top: scrollPosition.current,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section id="services" className="bg-secondary relative md:pt-10 px-6 lg:px-10 pb-20">
      <div className='mx-auto max-w-6xl relative'>
        <h1 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide">
          <strong>My&nbsp;<span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span></strong>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <Button
              key={index}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 border bg-secondary"
              onClick={() => openModal(service)}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image 
                  src={service.thumbnail} 
                  alt={service.thumbnail} 
                  width={200} height={200} 
                  className="lg:w-32 md:w-20 w-16 services-img" 
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">{service.title}</h1>
                  <p className="text-base text-start leading-6 mt-1 font-semibold">
                    {truncateDescription(service.desc, MAX_DESCRIPTION_LENGTH)}&nbsp;
                    <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-800 bg-clip-text text-transparent hover:text-indigo-600 text-sm text-end font-medium">
                      Read more
                    </span>
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Full-page loader overlay */}
        {isLoading && <Loader />} {/* Show loader */}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div ref={modalRef} className="p-4 max-h-[80vh] overflow-y-auto bg-secondary no-scrollbar relative">
            {selectedService && (
              <>
                <Image 
                src={selectedService.thumbnail} 
                width={200} height={200} 
                alt={selectedService.title} 
                className="w-20 h-20 mb-4 modal-top-img" 
                style={{ width: 'auto', height: 'auto' }}
                />
                <div className="lg:ms-5">
                  <h3 className="text-start py-6 text-xl md:text-2xl font-bold">{selectedService.title}</h3>
                  {/* Detailed paragraphs */}
                  {selectedService.detailedDesc.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-start text-base mt-3 leading-7 font-medium">{paragraph}</p>
                  ))}
                  {/* Render images */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 py-8 gap-4 mt-4">
                    {selectedService.detailedDesc.images.map((image, idx) => (
                      <Image 
                      key={idx} 
                      src={image.src} 
                      width={300} 
                      height={200}
                      alt={image.alt} 
                      className="w-full h-auto object-cover rounded-lg shadow-sm modal-img" 
                      />
                    ))}
                  </div>
                  {/* Text1 paragraphs */}
                  {selectedService.detailedDesc.textDesc.map((text, idx) => (
                    <p key={idx} className="text-start text-base mt-3 leading-7 font-medium">{text}</p>
                  ))}
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Services;



