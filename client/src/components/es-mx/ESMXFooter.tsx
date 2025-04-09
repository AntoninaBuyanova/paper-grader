import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, TwitterIcon, InstagramIcon, YoutubeIcon, FacebookIcon } from '../icons/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { appendUtmParams } from '../../utils/utm';

const ESMXFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState('es-mx');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the initial language based on the URL path
    const path = location.pathname;
    if (path.includes('/pt-br')) {
      setSelectedLanguage('pt-br');
    } else if (path.includes('/pt')) {
      setSelectedLanguage('pt');
    } else if (path.includes('/es-mx')) {
      setSelectedLanguage('es-mx');
    } else if (path.includes('/es')) {
      setSelectedLanguage('es');
    } else {
      setSelectedLanguage('en');
    }
  }, [location.pathname]);

  // Get UTM parameters from the current URL
  const getUtmParamsString = (): string => {
    if (typeof window === 'undefined') return '';
    
    const searchParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    // Extract UTM parameters
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = searchParams.get(param);
      if (value) {
        utmParams.append(param, value);
      }
    });
    
    const utmString = utmParams.toString();
    return utmString ? `?${utmString}` : '';
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    
    // Extract the current page path without the language prefix
    let currentPath = location.pathname;
    const langPrefixes = ['/pt-br', '/pt', '/es-mx', '/es'];
    for (const prefix of langPrefixes) {
      if (currentPath.startsWith(prefix)) {
        currentPath = currentPath.substring(prefix.length) || '/';
        break;
      }
    }
    
    // Get UTM parameters from current URL
    const utmParams = getUtmParamsString();
    
    // Special handling for specific tool pages with language as suffix
    const specificPaths = ['/plagiarism-checker', '/ai-paraphrasing-tool', '/AI-Detector', '/ai-proofreading'];
    for (const path of specificPaths) {
      // Check if current path is one of the specific paths or has a language suffix
      const basePathMatch = specificPaths.some(p => 
        currentPath === p || 
        specificPaths.some(sp => currentPath.startsWith(sp + '/'))
      );
      
      if (basePathMatch) {
        // Extract the base path without any language suffix
        const basePath = specificPaths.find(p => 
          currentPath === p || currentPath.startsWith(p + '/')
        ) || currentPath;
        
        if (lang === 'en') {
          navigate(`${basePath}${utmParams}`);
        } else {
          navigate(`${basePath}/${lang}${utmParams}`);
        }
        return;
      }
    }
    
    // If we're at the root, we need special handling
    if (currentPath === '/') {
      if (lang === 'en') {
        navigate(`/${utmParams}`);
      } else {
        navigate(`/${lang}${utmParams}`);
      }
      return;
    }
    
    // Navigate to the selected language version of the current page
    if (lang === 'en') {
      navigate(`${currentPath}${utmParams}`);
    } else {
      navigate(`/${lang}${currentPath}${utmParams}`);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Flag icons for each language
  const languageOptions = [
    { code: 'en', name: 'English', flag: '/icons/us-flag.svg' },
    { code: 'pt', name: 'Português', flag: '/icons/pt-flag.svg' },
    { code: 'pt-br', name: 'Português (Brasil)', flag: '/icons/br-flag.svg' },
    { code: 'es', name: 'Español', flag: '/icons/es-flag.svg' },
    { code: 'es-mx', name: 'Español (México)', flag: '/icons/mx-flag.svg' },
  ];

  // Get current language data
  const currentLang = languageOptions.find(lang => lang.code === selectedLanguage) || languageOptions[0];

  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-[#F8F8F3] font-aeonik">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and tagline with Language Selector */}
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
          <img 
            src="/Banner (2).png" 
            alt="Reimagina la Palabra - Plataforma Inteligente para Escritura e Investigación" 
            className="h-auto max-w-full sm:max-w-[450px] md:max-w-[550px]"
          />
          
          {/* Language Selector */}
          <div className="relative mt-1 self-start sm:self-start w-full sm:w-auto flex justify-start sm:justify-end" ref={dropdownRef}>
            <div 
              className="w-[90px] bg-white py-2 px-2 flex items-center justify-between cursor-pointer"
              style={{ borderRadius: '8px' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center">
                <img 
                  src={currentLang.flag || '/icons/us-flag.svg'} 
                  alt={currentLang.name}
                  className="w-6 h-6 rounded-full mr-2" 
                />
                <span className="font-medium">
                  {selectedLanguage === 'es-mx' ? 'ES' : currentLang.code.toUpperCase()}
                </span>
              </div>
              <svg 
                className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 w-[200px] bg-[#1E1E1E] shadow-lg right-0 sm:right-0" style={{ borderRadius: '8px' }}>
                <ul className="py-2">
                  {languageOptions.map((lang) => (
                    <li 
                      key={lang.code}
                      className={`px-4 py-2 flex items-center cursor-pointer hover:bg-[#2A2A2A] text-white ${selectedLanguage === lang.code ? 'bg-[#2A2A2A]' : ''}`}
                      onClick={() => handleLanguageSelect(lang.code)}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.name}
                        className="w-6 h-6 rounded-full mr-3" 
                      />
                      <span>
                        {lang.name}
                      </span>
                      {selectedLanguage === lang.code && (
                        <svg className="w-4 h-4 ml-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Company */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 font-aeonik text-base sm:text-lg">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href={appendUtmParams("https://mystylus.ai/terms-conditions/")} className="text-[#232323] hover:opacity-70 font-aeonik">Términos y condiciones</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/privacy-policy/")} className="text-[#232323] hover:opacity-70 font-aeonik">Política de privacidad</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/about-us/")} className="text-[#232323] hover:opacity-70 font-aeonik">Acerca de nosotros</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/affiliate-program/")} className="text-[#232323] hover:opacity-70 font-aeonik">Programa de afiliados</a></li>
            </ul>
          </div>

          {/* AI Generators */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 font-aeonik text-base sm:text-lg">Generadores IA</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href={appendUtmParams("https://mystylus.ai/paragraph-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de párrafos</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/ai-paper-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de trabajos académicos</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/ai-story-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de historias</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/thesis-statement-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de tesis: Pruébalo</a></li>
            </ul>
          </div>

          {/* Writing tools */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 font-aeonik text-base sm:text-lg">Herramientas de escritura</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href={appendUtmParams("https://mystylus.ai/ai-essay-writer/")} className="text-[#232323] hover:opacity-70 font-aeonik">Asistente de escritura IA</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/essay-title-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de títulos</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/paraphrase-tool/")} className="text-[#232323] hover:opacity-70 font-aeonik">Herramienta de parafraseo</a></li>
              <li><a href={appendUtmParams("https://mystylus.ai/ai-literature-review-generator/")} className="text-[#232323] hover:opacity-70 font-aeonik">Generador de revisión bibliográfica</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4 font-aeonik text-base sm:text-lg">Síguenos</h3>
            <div className="flex gap-4 flex-wrap mb-6">
              <a href={appendUtmParams("https://www.linkedin.com/company/mystylus-ai/")} className="text-[#232323] hover:opacity-70"><LinkedInIcon className="w-6 h-6" /></a>
              <a href={appendUtmParams("https://x.com/stylusai/")} className="text-[#232323] hover:opacity-70"><TwitterIcon className="w-6 h-6" /></a>
              <a href={appendUtmParams("https://www.instagram.com/mystylus.ai/")} className="text-[#232323] hover:opacity-70"><InstagramIcon className="w-6 h-6" /></a>
              <a href={appendUtmParams("https://www.youtube.com/@mystylus")} className="text-[#232323] hover:opacity-70"><YoutubeIcon className="w-6 h-6" /></a>
              <a href={appendUtmParams("https://www.facebook.com/mystylusai/")} className="text-[#232323] hover:opacity-70"><FacebookIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 text-xs sm:text-sm text-[#232323] font-aeonik">
          <div className="flex flex-col gap-1 mb-4 md:mb-0">
            <div>© 2024 myStylus Todos los derechos reservados</div>
            <div className="flex flex-wrap gap-2">
              <a href="mailto:info@myStylus.ai" className="hover:opacity-70 font-medium">info@myStylus.ai</a>
              <span className="hidden sm:inline mx-2">•</span>
              <a href={appendUtmParams("https://mystylus.ai/privacy-policy/")} className="hover:opacity-70 font-medium">Política de privacidad</a>
            </div>
          </div>
          <div className="md:col-start-3 md:col-span-2 flex flex-col">
            <span>MyStylus, Inc., 3524 Silverside Road, Suite 35B,</span>
            <span>Wilmington 19810, Delaware, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ESMXFooter; 