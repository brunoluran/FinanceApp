import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #202020;
`;

export const Header = styled.View`
  padding: 20px 20px 0;
`;

export const FlatList = styled.FlatList.attrs({
  marginHorizontal: 20,
})`
  flex: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #fff;
  margin: 10px 10px 0;
`;
