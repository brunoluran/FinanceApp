import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #202020;
  padding: 20px;
`;

export const PressableView = styled.Pressable`
  flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 40px;
`;

export const PressableTextArea = styled.Pressable`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
`;
