import { Container, Header, FlatList } from "./style";
import { useTheme } from "styled-components";
import firebase from "../../firebase";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import Text from "../../components/Text";
import List from "./List";

export default function Home() {
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const theme = useTheme();
  const navigation = useNavigation();

  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().balance);
        });
    }
    loadList();
  }, []);

  return (
    <Container>
      <Header>
        <Text size={20} bold>
          {user && user.name}
        </Text>
        <Text size={26} bold>
          R$ {saldo}
        </Text>
        <Text size={14} color="#00b94a" margin={50}>
          Ultimas movimentações
        </Text>
      </Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={historico}
        renderItem={({ item }) => <List data={item} />}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
}
