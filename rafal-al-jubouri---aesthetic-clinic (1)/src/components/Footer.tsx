import { navLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-2xl font-serif font-medium text-gray-800">Rafal Al-Jubouri</p>
            <p className="text-gray-500">Creator of beautiful skin</p>
          </div>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; 2024 Rafal Al-Jubouri. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
