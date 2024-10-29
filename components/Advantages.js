
import React from 'react';
import { FaBullhorn, FaChartLine, FaClock, FaUsers, FaTools, FaLock, FaMobileAlt, FaDollarSign, FaThumbsUp } from 'react-icons/fa';

const Advantages = () => {
  const advantagesData = [
    {
      icon: <FaBullhorn size={40} className="text-blue-600" aria-hidden="true" />,
      title: 'Alcance Ampliado de Clientes',
      description: 'Um site permite que sua revenda alcance um público muito maior, além das limitações geográficas das lojas físicas.',
    },
    {
      icon: <FaChartLine size={40} className="text-green-600" aria-hidden="true" />,
      title: 'Aumento de Visibilidade Online',
      description: 'Melhore sua presença na internet e seja encontrado facilmente por potenciais clientes através de mecanismos de busca.',
    },
    {
      icon: <FaClock size={40} className="text-purple-600" aria-hidden="true" />,
      title: 'Disponibilidade 24/7',
      description: 'Seu site estará disponível para clientes em qualquer horário, permitindo que eles explorem seu estoque e façam consultas a qualquer momento.',
    },
    {
      icon: <FaUsers size={40} className="text-yellow-600" aria-hidden="true" />,
      title: 'Interação Facilitada com Clientes',
      description: 'Ofereça canais de comunicação direta, como chats e formulários de contato, para atender melhor às necessidades dos clientes.',
    },
    {
      icon: <FaTools size={40} className="text-red-600" aria-hidden="true" />,
      title: 'Facilidade na Gestão de Estoque',
      description: 'Atualize seu inventário de maneira rápida e eficiente, garantindo que as informações estejam sempre atualizadas.',
    },
    {
      icon: <FaLock size={40} className="text-indigo-600" aria-hidden="true" />,
      title: 'Segurança e Confiabilidade',
      description: 'Garanta a proteção dos dados dos seus clientes e demonstre profissionalismo e confiabilidade através de um site bem estruturado.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-pink-600" aria-hidden="true" />,
      title: 'Responsividade para Dispositivos Móveis',
      description: 'Proporcione uma excelente experiência de navegação em smartphones e tablets, alcançando clientes onde quer que estejam.',
    },
    {
      icon: <FaDollarSign size={40} className="text-teal-600" aria-hidden="true" />,
      title: 'Automação de Vendas e Marketing',
      description: 'Utilize ferramentas integradas para automatizar processos de vendas e campanhas de marketing, otimizando seus resultados.',
    },
    {
      icon: <FaThumbsUp size={40} className="text-orange-600" aria-hidden="true" />,
      title: 'Aumento das Vendas',
      description: 'Com uma presença online eficaz, você gera mais leads qualificados, resultando em um aumento significativo nas vendas.',
    },
  ];

  return (
    <section className="bg-slate-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Vantagens de Ter um Site para sua Revenda de Veículos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesData.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
