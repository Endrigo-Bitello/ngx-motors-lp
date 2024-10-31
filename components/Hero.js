"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Sua Revenda Online, Mais Vendas Garantidas';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(typeText, 50);
      }
    };

    setTimeout(typeText, 500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="relative min-h-[50vh] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Animated background elements */}

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-6 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            Potencialize Seus Resultados
          </span>
          <Sparkles className="w-5 h-5 text-gray-500" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-700 leading-tight"
        >
          {text}
          <span className="animate-blink">|</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl text-gray-600 dark:text-gray-300"
        >
          Transforme sua revenda em um sucesso digital com nossa plataforma inovadora. 
          Seus clientes estão online, e nós ajudamos você a alcançá-los.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://demo.ngxbr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 justify-center overflow-hidden rounded-full bg-gray-700 px-8 py-3 text-base font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
            aria-label="Ver demonstração da plataforma"
          >
            <span className="relative z-10">Ver demonstração</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#features"
              className="inline-flex items-center gap-2 justify-center px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
            >
              Saiba mais
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
