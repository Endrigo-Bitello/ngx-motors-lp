// components/Slides.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slidesData = [
  {
    id: 1,
    title: 'Controle de Estoque',
    description: 'Adicione, edite e remova veículos do seu estoque com facilidade.',
    image: '/stock.png',
  },
  {
    id: 2,
    title: 'Simulação de Financiamento',
    description: 'Permita que clientes simulem financiamentos e receba relatórios para iniciar o processo.',
    image: '/finance.png',
  },
  {
    id: 3,
    title: 'Mensagens pelo Site',
    description: 'Receba mensagens diretamente pelo site e conquiste mais clientes.',
    image: '/message.png',
  },
  {
    id: 4,
    title: 'SEO Otimizado',
    description: 'Alcance melhor posicionamento nos mecanismos de busca com SEO integrado.',
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
    slideInterval.current = setInterval(nextSlide, AUTO_ROTATE_DELAY);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl bg-white"
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
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center p-8 lg:p-12 space-y-6 lg:space-y-0"
              >
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={300}
                    className="object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-10">
                  <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed text-left">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação Minimalistas */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
            aria-label="Slide Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
            aria-label="Próximo Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-8 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border border-gray-300 transition-colors duration-300 ${currentSlide === index ? 'bg-gray-800' : 'bg-transparent'
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
