import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Departments from './components/Departments';
import MusicPlayer from './components/MusicPlayer';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Departments />
        <MusicPlayer />
        <Merchandise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
