import { images } from '../constants';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('${images.hero}')` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
          Rafal Al-Jubouri
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Creator of beautiful skin
        </p>
        <a href="#contact" className="mt-8 inline-block px-8 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 font-medium">
          Book Appointment
        </a>
      </div>
    </section>
  );
}