import { Container, PressableView, KeyboardAvoidingView, Logo, PressableTextArea } from "./style";
import { useTheme } from "styled-components";
import { Platform, Keyboard, View, ActivityIndicator } from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import Input from "../../components/Input";
import Pressable from "../../components/Pressable";
import Text from "../../components/Text";

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <PressableView onPress={() => Keyboard.dismiss()}>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null}>
          <Logo source={require("../../assets/Logo.png")} />
          <Input
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <Pressable
            text={loadingAuth ? <ActivityIndicator color="#fff" size={25} /> : "Acessar"}
            onPress={handleSignIn}
          />
          <PressableTextArea onPress={() => navigation.navigate("SignUp")}>
            <Text size={14}>Não tem uma conta?</Text>
            <Text size={14} bold color={theme.color.primary}>
              Cadastre-se
            </Text>
          </PressableTextArea>
        </KeyboardAvoidingView>
      </Container>
    </PressableView>
  );
}
