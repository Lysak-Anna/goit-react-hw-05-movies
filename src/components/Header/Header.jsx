import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, CommonHeader } from './Header.styled';
import LanguageSwitch from 'components/LanguageSwitch/LanguageSwitch';
import useLanguageContext from 'hooks/useLanguageContext';

export default function Header() {
  const { language } = useLanguageContext();
  return (
    <>
      <CommonHeader>
        <nav>
          <StyledLink to="/">
            {language === 'uk' ? 'Головна' : 'Home'}
          </StyledLink>
          <StyledLink to="/movies">
            {language === 'uk' ? 'Фільми' : 'Movies'}
          </StyledLink>
        </nav>
        <LanguageSwitch />
      </CommonHeader>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
