import { Container, PressableView } from "./style";
import { useTheme } from "styled-components";
import { Keyboard, Alert } from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../firebase";
import { format } from "date-fns";

import Pressable from "../../components/Pressable";
import Picker from "./Picker";
import Input from "../../components/Input";

import Text from "../../components/Text";
export default function New() {
  const navigation = useNavigation();

  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);
  const { user: userUid } = useContext(AuthContext);

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(valor)) || tipo === null) {
      alert("Preencha todos os campos!");
      return;
    }

    Alert.alert("Confirmando dados", `Tipo ${tipo} - Valor: ${parseFloat(valor)} `, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => handleAdd(),
      },
    ]);
  }

  async function handleAdd() {
    let uid = userUid.uid;

    let key = await firebase.database().ref("transactions").child(uid).push().key;
    await firebase
      .database()
      .ref("transactions")
      .child(uid)
      .child(key)
      .set({
        type: tipo,
        value: parseFloat(valor),
        date: format(new Date(), "dd/MM/yy"),
      });

    //Atualizar o nosso saldo
    let user = firebase.database().ref("users").child(uid);
    await user.once("value").then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance);

      tipo === "despesa" ? (balance -= parseFloat(valor)) : (balance += parseFloat(valor));

      user.child("balance").set(balance);
    });
    Keyboard.dismiss();
    setValor("");
    navigation.navigate("Home");
  }

  return (
    <PressableView onPress={() => Keyboard.dismiss()}>
      <Container>
        <Input
          placeholder="Valor desejado"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => Keyboard.dismiss()}
          value={valor}
          onChangeText={(text) => setValor(text)}
        />

        <Picker onValueChange={(e) => setTipo(e)} />

        <Pressable text={"Registrar"} onPress={handleSubmit} />
      </Container>
    </PressableView>
  );
}
