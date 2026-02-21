import { useState } from 'react';
import { treatments } from '../constants';
import { X } from 'lucide-react';

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  return (
    <section id="treatments" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">Signature Treatments</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Discover our curated selection of treatments designed to rejuvenate and enhance your natural beauty.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-gray-800">{treatment.title}</h3>
              <p className="text-gray-600">{treatment.description}</p>
              <button onClick={() => setSelectedTreatment(treatment)} className="mt-4 text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTreatment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedTreatment(null)}>
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedTreatment(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-serif mb-4">{selectedTreatment.title}</h3>
            <p className="text-gray-600">{selectedTreatment.description}</p>
            <p className="mt-4 text-sm text-gray-500">Further details about the procedure, benefits, and aftercare would be displayed here.</p>
            <a href="#contact" onClick={() => setSelectedTreatment(null)} className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
              Book This Treatment
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
