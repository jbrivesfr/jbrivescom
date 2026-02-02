import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';
import SchemaOrg from './SchemaOrg';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "jbrives.com",
    "url": "https://jbrives.com",
    "logo": "https://jbrives.com/logo.png",
    "description": "L'automatisation technologique au service de votre productivité et de votre santé."
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      <SchemaOrg schema={organizationSchema} />
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-stone-900 text-white p-1.5 rounded-sm group-hover:bg-brand-600 transition-colors">
                <Terminal size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">jbrives.com</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-brand-700'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-stone-900 p-2"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-medium rounded-sm ${
                     isActive(link.path)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 text-stone-100">
                 <Terminal size={20} />
                 <span className="font-bold">jbrives.com</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                Le blog de JB Rives. Exploration du futur du travail par la technologie et de l'optimisation humaine.
              </p>
              <div className="text-xs text-stone-500">
                &copy; 2026 jbrives.com - Tous droits réservés.
              </div>
            </div>
            
            <div>
              <h4 className="text-stone-100 font-bold mb-4 uppercase text-xs tracking-wider">Liens rapides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Derniers articles</Link></li>
                <li><Link to="/about" className="hover:text-brand-400 transition-colors">Mon histoire</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
