import styled from 'styled-components/native';

export const ComponentText = styled.Text`
  font-size: ${(props) => (props.size ? `${props.size}` : '16')}px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => (props.color ? `${props.color}` : '#FFF')};
  margin-top: ${(props) => (props.margin ? `${props.margin}` : '5')}px;
`;

export default function Text({ children, size, color, margin, bold }) {
  return (
    <ComponentText size={size} color={color} margin={margin} bold={bold}>
      {children}
    </ComponentText>
  );
}
