import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const BackLink = styled(Link)`
  display: inline-flex;
  margin-top: 10px;
  margin-left: 10px;
  color: #959794;
  text-decoration-color: rgba(233, 50, 46, 0.3);
  &:hover {
    color: #e9322e;
  }
`;
export const AddLink = styled(Link)`
  color: #959794;
  text-decoration-color: rgba(233, 50, 46, 0.3);
  font-size: 16px;
  &:hover {
    color: #e9322e;
  }
`;
export const Container = styled.div`
  padding: 40px;
  display: flex;
`;
export const Image = styled.img`
  margin-right: 32px;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const Info = styled.span`
  display: block;
  font-size: 16px;
`;
export const AddInfo = styled.div`
  padding-left: 40px;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
