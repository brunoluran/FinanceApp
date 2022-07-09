import { Container, KeyboardAvoidingView, Logo, PressableTextArea } from './style';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Pressable from '../../components/Button';
import Text from '../../components/Text';

export default function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Logo source={require('../../assets/Logo.png')} />
        <Input
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <Input
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder='Senha'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Pressable text={'Acessar'} />
        <PressableTextArea onPress={() => navigation.navigate('SignUp')}>
          <Text size={14}>Não tem uma conta?</Text>
          <Text size={14} bold color={theme.color.primary}>
            {' '}
            Cadastre-se
          </Text>
        </PressableTextArea>
      </KeyboardAvoidingView>
    </Container>
  );
}
