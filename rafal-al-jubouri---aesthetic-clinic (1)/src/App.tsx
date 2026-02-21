/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import ClinicExperience from './components/ClinicExperience';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-off-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <BeforeAfter />
        <Testimonials />
        <ClinicExperience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
