import { FaExternalLinkAlt } from 'react-icons/fa';

const Demo = () => {
  return (
    <section className="container mx-auto px-4 bg-white py-16">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-500 ease-in-out">
        

        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>

        <h2 className="text-4xl font-bold z-10 relative">Explore o Sistema em Ação</h2>
        <p className="text-lg mt-4 z-10 relative mb-6 text-gray-300">
          Veja como nosso sistema pode transformar sua revenda. Explore as funcionalidades que facilitam a gestão e aumentam suas vendas.
        </p>

        <div className="relative group">
          <a
            href="https://demo.ngxbr.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block p-px font-semibold leading-6 text-zinc-900 bg-gray-800 shadow-lg cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-lg bg-white">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">Acessar Demonstração</span>
                <FaExternalLinkAlt className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demo;
