import Link from 'next/link';

const Hero = () => {

  return (
    <section className="bg-gray-200 text-gray-800">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        <div className="mb-6">
          <hr className="border-t-2 border-gray-300 w-24 mx-auto" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Sua Revenda Online, Mais Vendas Garantidas
        </h1>

        
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Transforme sua revenda em um sucesso digital. Clientes estão procurando, e você precisa estar lá.
        </p>

        
        <a
          href="https://emxsoftwares.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-zinc-900 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 cursor-pointer"
          aria-label="Saiba Mais sobre Nossas Soluções"
        >
          <span className="text-lg relative z-10">Ver demonstração</span>
          <div
            className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] translate-x-[-100%] transition-transform duration-1000 group-hover/button:translate-x-[100%]"
          >
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
