import styled from 'styled-components/native';

const Button = styled.Pressable`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : props.theme.color.primary)};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${(props) => (props.color ? `${props.color}` : props.theme.color.white)};
`;

export default function Pressable({ text, onPress, bgColor, color }) {
  return (
    <Button onPress={onPress} bgColor={bgColor} color={color}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
