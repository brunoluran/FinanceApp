import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useTheme } from 'styled-components';

const Container = styled.View`
  width: 100%;
  margin-top: ${0 + getStatusBarHeight()}px;
`;

export default function ReturnIcon({ onPress }) {
  const theme = useTheme();
  return (
    <Container>
      <Ionicons name='ios-chevron-back' color={theme.color.white} size={35} onPress={onPress} />
    </Container>
  );
}
