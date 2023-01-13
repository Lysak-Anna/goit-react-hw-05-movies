import { createContext, useState } from 'react';

export const LangContext = createContext('ua');

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const changeLanguageHandler = () => {
    setLanguage(prev => (prev === 'en' ? 'uk' : 'en'));
  };
  return (
    <LangContext.Provider value={{ language, changeLanguageHandler }}>
      {children}
    </LangContext.Provider>
  );
}
