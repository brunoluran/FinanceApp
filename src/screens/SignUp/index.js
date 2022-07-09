import { Container, KeyboardAvoidingView, Header, ViewInputArea, Footer } from './style';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import Pressable from '../../components/Button';
import ReturnIcon from '../../components/ReturnIcon';
import Text from '../../components/Text';

export default function SignUp() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Header>
          <ReturnIcon onPress={() => navigation.goBack()} />
          <Text size={24} margin={10}>
            Preencha seus dados
          </Text>
        </Header>
        <ViewInputArea>
          <Input
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='words'
            keyboardType='email-address'
          />

          <MaskedInput
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={birthDate}
            onChangeText={(e) => setBirthDate(e)}
            placeholder='Data de Nascimento'
            keyboardType='number-pad'
          />

          <MaskedInput
            type='cpf'
            value={cpf}
            onChangeText={(e) => setCpf(e)}
            placeholder='CPF'
            keyboardType='number-pad'
          />

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

          <Pressable text={'Cadastrar'} />
        </ViewInputArea>
        <Footer>
          <Text size={10}>Todos os direitos reservados ©</Text>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
}
