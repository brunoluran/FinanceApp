import { Container, PressableView } from './style';
import { useTheme } from 'styled-components';
import { Keyboard } from 'react-native';

import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import MaskedInput from '../../components/MaskedInput';
import Pressable from '../../components/Pressable';
import Picker from './Picker';

export default function New() {
  const { user, signOut } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [type, setType] = useState(null);

  return (
    <PressableView onPress={() => Keyboard.dismiss()}>
      <Container>
        <MaskedInput
          placeholder={'Valor desejado'}
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          }}
          value={value}
          onChangeText={(e) => setValue(e)}
          keyboardType='number-pad'
          returnKeyType='next'
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <Picker onValueChange={setType} />

        <Pressable text={'Registrar'} />
      </Container>
    </PressableView>
  );
}
