import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

const TextInput = styled(TextInputMask).attrs({
  placeholderTextColor: "#909090",
})`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #000;
  margin: 5px 0;
  padding: 10px;
  color: #fff;
  font-size: 14px;
`;

export default function MaskedInput({
  type,
  value,
  onChangeText,
  style,
  keyboardType,
  options,
  onFocus,
  onBlur,
  ref,
  error,
  placeholder,
  onSubmitEditing,
  returnKeyType,
}) {
  return (
    <TextInput
      type={type}
      value={value}
      onChangeText={onChangeText}
      style={style}
      keyboardType={keyboardType}
      options={options}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      error={error}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
