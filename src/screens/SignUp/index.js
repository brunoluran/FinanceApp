import { Container, PressableView, KeyboardAvoidingView } from "./style";
import { useTheme } from "styled-components";
import { Platform, Keyboard } from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import Input from "../../components/Input";
import MaskedInput from "../../components/MaskedInput";
import Pressable from "../../components/Pressable";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(email, password, name, cpf, birthDate);
  }

  return (
    <PressableView onPress={() => Keyboard.dismiss()}>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null}>
          <Input
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="email-address"
          />

          <MaskedInput
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            value={birthDate}
            onChangeText={(e) => setBirthDate(e)}
            placeholder="Data de Nascimento"
            keyboardType="number-pad"
          />

          <MaskedInput
            type="cpf"
            value={cpf}
            onChangeText={(e) => setCpf(e)}
            placeholder="CPF"
            keyboardType="number-pad"
          />

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

          <Pressable text={"Cadastrar"} onPress={handleSignUp} />
        </KeyboardAvoidingView>
      </Container>
    </PressableView>
  );
}
