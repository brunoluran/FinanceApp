import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  width: 100%;
  height: 55px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: #e1e1e1;
`;

export default function Input() {
  return <TextInput />;
}
