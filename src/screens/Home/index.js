import { Container } from './style';
import { useTheme } from 'styled-components';

import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import Text from '../../components/Text';
import Pressable from '../../components/Pressable';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Text size={14}>{user && user.cpf}</Text>
      <Text size={14}>{user && user.birthDate}</Text>
      <Text size={14}>{user && user.name}</Text>
      <Pressable text={'Deslogar'} onPress={handleSignOut} />
    </Container>
  );
}
