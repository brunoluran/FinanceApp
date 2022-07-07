import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${10 + getStatusBarHeight()}px;
  background-color: #999;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 20px;
`;
