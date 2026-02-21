import { images } from '../constants';

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight">Real Results</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The transformative yet natural-looking results we achieve for our patients.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {images.beforeAfter.map((src, index) => (
            <div key={index} className="bg-gray-200 aspect-square rounded-lg overflow-hidden">
              <img src={src} alt={`Before and after example ${index + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">Please note that individual results may vary. A personalized consultation is required to determine the best treatment plan for you.</p>
      </div>
    </section>
  );
}
