import { testimonials } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">What Our Patients Say</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-off-white p-8 rounded-lg">
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-gray-800 text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
