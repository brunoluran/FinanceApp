import styled from 'styled-components/native';

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#909090',
})`
  width: 100%;
  border-radius: 10px;
  background-color: #000;
  margin: 5px 0;
  padding: 10px;
  color: #fff;
  font-size: 14px;
`;

export default function Input({
  value,
  onChangeText,
  placeholder,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
}
