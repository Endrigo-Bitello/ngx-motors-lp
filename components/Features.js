import FeatureCard from './FeatureCard';
import { FaHeadset, FaRegCheckCircle, FaRegClock, FaRegFileAlt, FaRegTimesCircle, FaSyncAlt } from 'react-icons/fa';

const featuresData = [
  {
    id: 1,
    icon: FaRegCheckCircle,
    title: 'Gestão de Estoque',
    description: 'Controle completo do estoque em tempo real, garantindo mais eficiência nas operações.',
  },
  {
    id: 2,
    icon: FaHeadset, 
    title: 'Suporte',
    description: 'Temos uma equipe preparada para atender suas necessidades e resolver quaisquer problemas que possam surgir.',
  },
  {
    id: 3,
    icon: FaRegFileAlt,
    title: 'Gerador de Relatórios',
    description: 'Gere relatórios detalhados de vendas e desempenho, facilitando a tomada de decisões.',
  },
  {
    id: 4,
    icon: FaSyncAlt,
    title: 'Atualizações Contínuas',
    description: 'Sistema sempre atualizado para melhor performance e segurança', 
  },
  {
    id: 5,
    icon: FaRegCheckCircle,
    title: 'Alta Performance',
    description: 'Sites rápidos, responsivos e otimizados para SEO, melhorando sua presença online.',
  },
  {
    id: 6,
    icon: FaRegTimesCircle,
    title: 'Site Pronto em 2 Dias',
    description: 'Tenha seu site profissional pronto rapidamente, sem comprometer a qualidade.',
  },
];

const Features = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Nossas Soluções
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
