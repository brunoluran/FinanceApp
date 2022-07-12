import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';

const PickerSelect = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: #000;
  margin: 5px 0;
  color: #fff;
  font-size: 14px;
`;

export default function Picker({ onValueChange }) {
  return (
    <PickerSelect>
      <RNPickerSelect
        placeholder={{ label: 'Selecione o tipo ', value: null }}
        onValueChange={(e) => onValueChange(e)}
        items={[
          { label: 'Receita', value: 'receita' },
          { label: 'Despesa', value: 'despesa' },
        ]}
      />
    </PickerSelect>
  );
}
