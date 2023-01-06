import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 40px;
`;
export const Input = styled.input`
  background-color: #19171a;
  border-radius: 4px;
  border: 2px solid #959794;
  color: #959794;
  font-size: 16px;
  padding-left: 8px;
  margin-bottom: 20px;
  width: 250px;
  height: 25px;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  height: 31px;
  width: 32px;
  color: #959794;
  background-color: #19171a;
  border: 2px solid #959794;
  border-radius: 4px;
  cursor: pointer;
`;
export const Icon = styled(BsSearch)`
  color: #e9322e;
`;
export const StyledLink = styled(Link)`
  color: #959794;
  text-decoration-color: rgba(233, 50, 46, 0.3);
  &:hover {
    color: #e9322e;
  }
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
