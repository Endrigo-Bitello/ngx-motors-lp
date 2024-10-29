// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Seção 1: Logo e Informações */}
          <div className="mb-6 md:mb-0">
            <Link href="/" passHref legacyBehavior>
              <a aria-label="Página Inicial">
                <Image src="/logo-light.png" alt="NGX Motors Logo" width={150} height={50} />
              </a>
            </Link>
            <p className="mt-4 text-sm">
              NGX Motors é líder em soluções automotivas, oferecendo veículos de alta qualidade e serviços excepcionais.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Políticas</h3>
            <ul>
              <li className="mb-2">
                <Link href="/politica-de-privacidade" passHref legacyBehavior>
                  <a className="hover:text-white transition-colors duration-200">Política de Privacidade</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/termos-de-servico" passHref legacyBehavior>
                  <a className="hover:text-white transition-colors duration-200">Termos de Serviço</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm mb-4">
              Email: <a href="mailto:contato@ngxmotors.com.br" className="hover:text-white">contato@ngxbr.com</a><br />
              Telefone: <a href="tel:+5551997852819" className="hover:text-white">+55 51 99785-2819</a><br />
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">

              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.326v21.348C0 23.408.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.408 24 22.674V1.326C24 .592 23.404 0 22.675 0z" />
                </svg>
              </a>

              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>

              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608C4.53 2.499 5.797 2.226 7.163 2.163 8.429 2.105 8.809 2.093 12 2.093m0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.601.368 3.66 1.31 2.718 2.252 2.48 3.426 2.422 4.703 2.363 5.983 2.35 6.392 2.35 12s.013 6.017.072 7.297c.058 1.277.296 2.451 1.238 3.393.942.942 2.116 1.18 3.393 1.238C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.451-.296 3.393-1.238.942-.942 1.18-2.116 1.238-3.393.059-1.28.072-1.689.072-7.297s-.013-6.017-.072-7.297c-.058-1.277-.296-2.451-1.238-3.393C19.401.368 18.227.13 16.95.072 15.67.013 15.261 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>

              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .592 0 1.326v21.348C0 23.408.596 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.408 24 22.674V1.326C24 .592 23.404 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} NGX Motors. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
