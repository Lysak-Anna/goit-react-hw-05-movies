import { useContext } from 'react';
import { LangContext } from 'Context/Context';
export default function useLanguageContext() {
  const { language, changeLanguageHandler } = useContext(LangContext);
  return { language, changeLanguageHandler };
}
