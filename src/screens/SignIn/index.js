import { Container, KeyboardAvoidingView, Text } from './style';
import { Platform } from 'react-native';

import Input from '../../components/Input';

export default function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Text>Register</Text>
        <Input />
      </KeyboardAvoidingView>
    </Container>
  );
}
