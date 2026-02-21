import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">Book Your Consultation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Take the first step towards radiant skin. Reach out to us to schedule your personalized consultation.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Contact Details</h3>
              <div className="mt-4 space-y-4 text-gray-600">
                <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-gray-400" /> +44 20 1234 5678</p>
                <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-gray-400" /> appointments@rafalclinic.com</p>
                <p className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-gray-400" /> 123 Harley Street, London, W1G 7JW</p>
              </div>
            </div>
            <div className="bg-gray-200 aspect-w-16 aspect-h-9 rounded-lg flex items-center justify-center text-gray-500">
              <p>Google Maps Placeholder</p>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={5} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
