import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUpIcon,
  ClockIcon,
  UsersIcon,
  WrenchIcon,
  LockIcon,
  SmartphoneIcon,
  DollarSignIcon,
  ThumbsUpIcon,
  MegaphoneIcon,
} from 'lucide-react';

const advantagesData = [
  {
    icon: <MegaphoneIcon size={32} />,
    title: 'Alcance Ampliado',
    description:
      'Expanda seu alcance além das limitações geográficas, atingindo um público muito maior.',
    color: 'blue',
  },
  {
    icon: <TrendingUpIcon size={32} />,
    title: 'Visibilidade Online',
    description:
      'Melhore sua presença digital e seja facilmente encontrado nos mecanismos de busca.',
    color: 'green',
  },
  {
    icon: <ClockIcon size={32} />,
    title: 'Disponível 24/7',
    description:
      'Seu site funciona ininterruptamente, permitindo consultas a qualquer momento.',
    color: 'purple',
  },
  {
    icon: <UsersIcon size={32} />,
    title: 'Interação Facilitada',
    description:
      'Ofereça múltiplos canais de comunicação para melhor atender seus clientes.',
    color: 'yellow',
  },
  {
    icon: <WrenchIcon size={32} />,
    title: 'Gestão Eficiente',
    description:
      'Atualize seu inventário rapidamente, mantendo informações sempre precisas.',
    color: 'red',
  },
  {
    icon: <LockIcon size={32} />,
    title: 'Total Segurança',
    description:
      'Proteja os dados dos clientes com as mais avançadas tecnologias de segurança.',
    color: 'indigo',
  },
  {
    icon: <SmartphoneIcon size={32} />,
    title: 'Mobile First',
    description:
      'Design responsivo para uma experiência perfeita em qualquer dispositivo.',
    color: 'pink',
  },
  {
    icon: <DollarSignIcon size={32} />,
    title: 'Automação Inteligente',
    description: 'Automatize vendas e marketing para otimizar seus resultados.',
    color: 'teal',
  },
  {
    icon: <ThumbsUpIcon size={32} />,
    title: 'Mais Vendas',
    description:
      'Aumente suas vendas com leads mais qualificados e conversões efetivas.',
    color: 'orange',
  },
];

const AdvantageCard = ({ advantage, index }) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    pink: 'bg-pink-50 text-pink-600 border-pink-200',
    teal: 'bg-teal-50 text-teal-600 border-teal-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={`relative overflow-hidden rounded-xl border p-6 ${colorMap[advantage.color]} transition-all duration-300`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6">
        <div className="w-full h-full opacity-10 rounded-full bg-current" />
      </div>

      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-lg p-3">{advantage.icon}</div>

        <h3 className="mb-2 text-xl font-bold">{advantage.title}</h3>

        <p className="text-sm opacity-90">{advantage.description}</p>
      </div>
    </motion.div>
  );
};

export default function Advantages() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que ter um site para sua revenda?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como uma presença online forte pode transformar seu negócio
            e impulsionar suas vendas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagesData.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
