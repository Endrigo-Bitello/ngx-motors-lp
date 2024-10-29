import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => (
  <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
    <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Pronto para transformar sua revenda?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Entre em contato conosco e descubra como podemos ajudar a impulsionar o seu negócio.
      </p>
      <Link href="https://wa.me/5197852819" passHref legacyBehavior>
        <a
          className="inline-flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 group"
          aria-label="Fale Conosco"
        >
          Fale Conosco
          <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </Link>
    </div>
  </section>
);

export default CTA;
