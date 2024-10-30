// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Advantages from '@/components/Advantages';
import FAQ from '@/components/FAQ';
import Demo from '@/components/Demo';
import Slides from '@/components/Slides';

export default function Home() {
  return (
    <>
      <Head>
        <title>NGX Motors | Soluções em Softwares para Revendas de Veículos</title>
        <meta
          name="description"
          content="NGX Motors oferece soluções inovadoras em softwares para otimizar a gestão de revendas de veículos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NGX Motors | Soluções em Softwares para Revendas de Veículos" />
        <meta property="og:description" content="Soluções inovadoras para otimizar a gestão de revendas de veículos." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.ngxbr.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NGX Motors | Soluções em Softwares para Revendas de Veículos" />
        <meta name="twitter:description" content="Soluções inovadoras para otimizar a gestão de revendas de veículos." />
        <meta name="twitter:image" content="/twitter-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-pjw6OqZtUf3WpEb+uZVVH+nD0M1u9zr0xw/HKK+5lJQ1GjnF1LkDRXv4Pw5t8FbHwrWzHP1c4gQ8O73TwUkO5Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <Hero />
        <Slides />
        <Advantages />
        <Demo />
        <Features />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
