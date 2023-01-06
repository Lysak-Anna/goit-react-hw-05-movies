import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, CommonHeader } from './Header.styled';

export default function Header() {
  return (
    <>
      <CommonHeader>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </CommonHeader>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
