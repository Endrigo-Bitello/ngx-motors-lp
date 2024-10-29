// components/Slides.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slidesData = [
  {
    id: 1,
    title: 'Simulação de Financiamento',
    description:
      'Os clientes podem simular financiamento, colocando seus dados e isso chegará em formato de relatório para o dono da revenda baixar e iniciar o processo.',
    image: '/finance.png',
  },
  {
    id: 2,
    title: 'Mensagens pelo Site',
    description:
      'Pessoas podem enviar mensagens e o lojista recebe essa mensagem, adquirindo um cliente pelo site.',
    image: '/message.png',
  },
  {
    id: 3,
    title: 'SEO Otimizado',
    description:
      'O sistema foi desenvolvido para ranquear o site nas buscas dos motores de busca da internet.',
    image: '/seo.png',
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;
  const slideInterval = useRef(null);

  const AUTO_ROTATE_DELAY = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, AUTO_ROTATE_DELAY);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">

        <div
          className="relative w-full max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={stopSlideTimer}
          onMouseLeave={startSlideTimer}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center p-6"
              >
                <div className="w-full lg:w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed text-left">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-zinc-900 hover:text-zinc-700 focus:outline-none transition-colors duration-300"
            aria-label="Slide Anterior">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-zinc-900 hover:text-zinc-700 focus:outline-none transition-colors duration-300"
            aria-label="Próximo Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-zinc-900' : 'bg-zinc-400'
                } focus:outline-none`}
                aria-label={`Ir para o slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slides;
