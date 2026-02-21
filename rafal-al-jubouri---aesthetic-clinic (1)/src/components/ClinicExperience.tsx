import { images } from '../constants';

export default function ClinicExperience() {

  const highlights = [
    'A serene and welcoming environment',
    'State-of-the-art treatment rooms',
    'Discreetly located for your privacy',
  ];

  return (
    <section id="clinic-experience" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">The Clinic Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Designed for your comfort and privacy, our clinic is a sanctuary where you can relax and rejuvenate.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.clinicExperience.map((src, index) => (
            <div key={index} className="aspect-w-3 aspect-h-2">
              <img src={src} alt={`Clinic view ${index + 1}`} className="rounded-lg object-cover w-full h-full" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          {highlights.map((highlight, index) => (
            <p key={index} className="text-gray-600 text-lg">{highlight}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
