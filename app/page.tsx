import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { TechStack } from '@/components/sections/tech-stack';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { OpenSource } from '@/components/sections/open-source';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export const metadata = {
  title: 'Thomas Ogiator - Frontend Engineer',
  description:
    'Frontend Engineer with 4+ years building production web applications across fintech, e-commerce, and SaaS platforms. Specialising in React, Next.js, and TypeScript.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Frontend Architecture',
    'Web Development',
    'Lagos Nigeria',
    'Remote Frontend Engineer',
  ],
  authors: [{ name: 'Thomas Ogiator' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thomasogiator.dev',
    siteName: 'Thomas Ogiator Portfolio',
    title: 'Thomas Ogiator - Frontend Engineer',
    description:
      'Frontend Engineer with 4+ years building production web applications across fintech, e-commerce, and SaaS platforms.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Thomas Ogiator - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Ogiator - Frontend Engineer',
    description:
      'Frontend Engineer with 4+ years building production web applications across fintech, e-commerce, and SaaS platforms.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      {/* <OpenSource /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}