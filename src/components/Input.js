import styled from "styled-components/native";

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#909090",
})`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "#000")};
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
  bgColor,
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
      bgColor={bgColor}
    />
  );
}
