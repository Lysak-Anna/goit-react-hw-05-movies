import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: #959794;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #e9322e;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const CommonHeader = styled.header`
  height: 80px;
  box-shadow: -1px 6px 12px -5px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;
