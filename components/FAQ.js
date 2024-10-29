// components/FAQ.js
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestion, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Por que minha revenda precisa de um site?',
      answer:
        'Hoje em dia, os clientes buscam veículos online antes de ir até uma loja física. Ter um site aumenta sua visibilidade, facilita o contato com potenciais compradores e aumenta suas vendas.',
    },
    {
      question: 'Eu não entendo de tecnologia, como posso gerenciar um site?',
      answer:
        'Nossa plataforma é muito simples e intuitiva. Você poderá gerenciar facilmente seu estoque, adicionar novos veículos e atualizar informações com poucos cliques, sem a necessidade de conhecimentos técnicos.',
    },
    {
      question: 'Quanto tempo leva para meu site ficar pronto?',
      answer:
        'Nós garantimos que seu site estará pronto em até 2 dias, com todas as funcionalidades necessárias para sua revenda começar a operar online imediatamente.',
    },
    {
      question: 'Eu já uso redes sociais, realmente preciso de um site?',
      answer:
        'Sim! Redes sociais são importantes, mas um site oferece credibilidade e centraliza todas as informações da sua revenda em um lugar. Além disso, permite maior controle sobre o conteúdo e oferece ferramentas avançadas de vendas.',
    },
    {
      question: 'Ter um site vai aumentar minhas vendas?',
      answer:
        'Sem dúvidas! Um site profissional oferece uma experiência melhor ao cliente, melhora sua presença online e gera leads qualificados que resultam em mais vendas.',
    },
    {
      question: 'O site é responsivo e funciona bem em smartphones?',
      answer:
        'Sim, todos os nossos sites são otimizados para funcionar perfeitamente em dispositivos móveis, garantindo que seus clientes tenham uma ótima experiência em qualquer tela.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Aqui você encontra as respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
