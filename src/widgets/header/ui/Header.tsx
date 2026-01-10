import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-primary-dark text-white py-3 sm:py-4 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-primary-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {t('header.title')}
            </h1>
            <p className="text-xs sm:text-sm opacity-90 mt-1 hidden sm:block">
              {t('header.subtitle')}
            </p>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
}
