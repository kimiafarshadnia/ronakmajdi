"use client"
import Header from './Header';
import Footer from './Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ParallaxProvider>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </ParallaxProvider>
  );
};