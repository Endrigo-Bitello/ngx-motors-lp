// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed w-full z-50 bg-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex items-center">
          <Link href="/" passHref legacyBehavior>
            <a>
              <Image src="/logo.png" alt="NGX Motors Logo" width={120} height={60} />
            </a>
          </Link>
        </div>


        <div className="relative group">
          <Link href="https://demo.ngxbr.com" passHref legacyBehavior>
            <a className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-black opacity-90 h-12 w-48 z-10">

              <div
                className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12">
                </div>

              <div className="absolute flex items-center justify-center text-white z-20 opacity-90 rounded-xl inset-0.5 bg-black">
                <span className="font-semibold text-lg">Ver Demonstração</span>
              </div>

              <div
                className="absolute duration-1000 group-hover:animate-spin w-full h-full bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"
              ></div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
