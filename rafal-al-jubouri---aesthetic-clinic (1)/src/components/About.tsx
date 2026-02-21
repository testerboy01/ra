import { trustPoints } from '../constants';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">A Commitment to Natural Beauty</h2>
            <p className="text-gray-600 leading-relaxed">
              Dr. Rafal Al-Jubouri believes in enhancing your unique beauty through subtle, yet significant treatments. With a deep understanding of facial anatomy and a passion for artistry, she provides personalized care that delivers natural-looking, confidence-boosting results. Her approach is rooted in science, safety, and a commitment to achieving the best version of you.
            </p>
          </div>
          <div className="space-y-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{point.title}</h3>
                  <p className="mt-1 text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
