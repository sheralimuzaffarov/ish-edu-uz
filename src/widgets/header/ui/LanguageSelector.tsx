import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Icons from '@radix-ui/react-icons';

const languages = [
  { code: 'uz', name: 'UZ', flag: '🇺🇿', image: null },
  { code: 'en', name: 'EN', flag: '🇬🇧', image: null },
  { code: 'ru', name: 'РУ', flag: '🇷🇺', image: null },
  { code: 'kr', name: 'KR', flag: null, image: '/img/Karakalpakstan.png' },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-primary-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base"
        style={{ color: 'rgb(24, 93, 137)' }}
      >
        <span>{currentLang.name}</span>
        <Icons.ChevronDownIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <ul
            className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[120px] overflow-hidden"
            style={{
              position: 'absolute',
              willChange: 'transform',
            }}
          >
            {languages.map((lang) => (
              <li key={lang.code} className="notify-item">
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors text-gray-900 ${
                    i18n.language === lang.code ? 'bg-gray-50 font-semibold' : ''
                  }`}
                >
                  {lang.image ? (
                    <img 
                      src={lang.image} 
                      alt={`${lang.name} flag`} 
                      className="me-1 object-contain"
                      style={{ height: '1em', width: '1.33em', display: 'inline-block', verticalAlign: 'middle' }}
                    />
                  ) : (
                    <span className="text-base">{lang.flag}</span>
                  )}
                  <span className="align-middle text-sm sm:text-base">{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
