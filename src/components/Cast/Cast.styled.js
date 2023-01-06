import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
  padding-top: 0;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Item = styled.li`
  flex-basis: calc((100% - 90px) / 10);
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 0;
  margin-bottom: 8px;
`;
export const Text = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
`;
export const Descr = styled.p`
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 0;
`;
