import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import de from '../i18n/de.json';
import es from '../i18n/es.json';
import nl from '../i18n/nl.json';
import sv from '../i18n/sv.json';

const translations = { en, fr, de, es, nl, sv };

// Strictly the 6 requested client languages
export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'fr', label: 'FR', name: 'French', dir: 'ltr' },
  { code: 'de', label: 'DE', name: 'German', dir: 'ltr' },
  { code: 'es', label: 'ES', name: 'Spanish', dir: 'ltr' },
  { code: 'nl', label: 'NL', name: 'Dutch', dir: 'ltr' },
  { code: 'sv', label: 'SE', name: 'Swedish', dir: 'ltr' },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load saved language from localStorage if available
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('avantee_lang') || 'en';
  });
  const [isAnimatingTransition, setIsAnimatingTransition] = useState(false);

  const selectedLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    // Persist selected language in localStorage
    localStorage.setItem('avantee_lang', currentLang);

    // Set HTML dir and lang attributes
    document.documentElement.setAttribute('dir', selectedLangObj.dir);
    document.documentElement.setAttribute('lang', selectedLangObj.code);
  }, [currentLang, selectedLangObj]);

  const switchLanguage = (langCode) => {
    if (langCode === currentLang) return;

    setIsAnimatingTransition(true);

    // 400ms transition: Fade Out -> Blur -> Update Language Text -> Fade In
    setTimeout(() => {
      setCurrentLang(langCode);
      setTimeout(() => {
        setIsAnimatingTransition(false);
      }, 200);
    }, 200);
  };

  // Helper function to resolve nested keys like "nav.home"
  const t = (keyPath, fallback = '') => {
    if (!keyPath) return fallback;
    const keys = keyPath.split('.');
    let dict = translations[currentLang] || translations['en'];

    for (let k of keys) {
      if (dict && dict[k] !== undefined) {
        dict = dict[k];
      } else {
        // Fallback to English if missing in target language
        let fallbackDict = translations['en'];
        for (let fk of keys) {
          if (fallbackDict && fallbackDict[fk] !== undefined) {
            fallbackDict = fallbackDict[fk];
          } else {
            return fallback || keyPath;
          }
        }
        return fallbackDict;
      }
    }
    return dict;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        selectedLangObj,
        LANGUAGES,
        switchLanguage,
        t,
        isAnimatingTransition,
      }}
    >
      <div
        className={`app-language-wrapper ${isAnimatingTransition ? 'lang-transitioning' : ''}`}
        style={{
          transition: 'filter 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, transform 0.3s ease',
          filter: isAnimatingTransition ? 'blur(6px)' : 'none',
          opacity: isAnimatingTransition ? 0.35 : 1,
          transform: isAnimatingTransition ? 'scale(0.995)' : 'scale(1)',
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
