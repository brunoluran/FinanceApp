import { Container } from './style';
import { useTheme } from 'styled-components';

import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import Text from '../../components/Text';
import Pressable from '../../components/Pressable';

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Text size={30}>{user && user.name}</Text>
      <Pressable text={'Registrar gastos'} onPress={() => alert('Hello')} />
      <Pressable text={'Sair'} onPress={handleSignOut} bgColor={'#EB0707'} />
    </Container>
  );
}
