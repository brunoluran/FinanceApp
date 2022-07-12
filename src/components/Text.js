import styled from "styled-components/native";

export const ComponentText = styled.Text`
  font-size: ${(props) => (props.size ? `${props.size}` : "16")}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => (props.color ? `${props.color}` : "#FFF")};
  margin-top: ${(props) => (props.margin ? `${props.margin}` : "5")}px;
  font-style: ${(props) => (props.italic ? "italic" : "normal")}; ;
`;

export default function Text({ children, size, color, margin, bold, italic }) {
  return (
    <ComponentText size={size} color={color} margin={margin} bold={bold} italic={italic}>
      {children}
    </ComponentText>
  );
}
