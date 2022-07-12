import { Container, Header, FlatList } from "./style";
import { useTheme } from "styled-components";
import firebase from "../../firebase";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { format, isPast } from "date-fns";
import { Alert } from "react-native";

import Text from "../../components/Text";
import List from "./List";

export default function Home() {
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const theme = useTheme();
  const navigation = useNavigation();

  const [historico, setHistorico] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setBalance(snapshot.val().balance);
        });

      await firebase
        .database()
        .ref("transactions")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(new Date(), "dd/MM/yy"))
        .limitToLast(10)
        .on("value", (snapshot) => {
          setHistorico([]);
          snapshot.forEach((item) => {
            let data = {
              key: item.key,
              type: item.val().type,
              value: item.val().value,
              date: item.val().date,
            };
            setHistorico((oldArray) => [...oldArray, data].reverse());
          });
        });
    }

    loadList();
  }, []);

  function handleDelete(data) {
    if (isPast(new Date(data.date))) {
      alert("Você não pode excluir um registro anigo!");
      return;
    }
    Alert.alert("Cuidado!", `Você deseja excluir ${data.type} - Valor: ${data.value}`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => handleDeleteSuccess(data),
      },
    ]);
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref("transactions")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let currentBalance = balance;
        data.type === "despesa"
          ? (currentBalance += parseFloat(data.value))
          : (currentBalance -= parseFloat(data.value));
        await firebase.database().ref("users").child(uid).child("balance").set(currentBalance);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container>
      <Header>
        <Text size={20} bold italic>
          {user && user.name}
        </Text>
        <Text size={26} bold color="#00b94a">
          R$ {balance.toFixed(2)}
        </Text>
        <Text size={14} margin={50}>
          Ultimas movimentações
        </Text>
      </Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={historico}
        renderItem={({ item }) => <List data={item} handleDelete={handleDelete} />}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
}
