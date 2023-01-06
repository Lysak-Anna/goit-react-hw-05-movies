import { AiOutlineHeart } from 'react-icons/ai';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: #19171a;
  -webkit-text-stroke: 1px #959794;
`;
export const Container = styled.div`
  padding-left: 40px;
`;
export const StyledLink = styled(NavLink)`
  color: #959794;
  text-decoration-color: rgba(233, 50, 46, 0.3);
  &:hover {
    color: #e9322e;
  }
`;
export const Icon = styled(AiOutlineHeart)`
  color: #e9322e;
  margin-right: 8px;
  width: 10px;
  height: 10px;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
