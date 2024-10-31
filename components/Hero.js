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
    <section className="relative min-h-[45vh] bg-slate-200 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 -top-10 -left-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-72 h-72 -bottom-10 -right-10 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

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
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
            Potencialize Seus Resultados
          </span>
          <Sparkles className="w-5 h-5 text-blue-500" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-gray-600 leading-tight"

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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;