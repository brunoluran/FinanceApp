import { Container, Header, FlatList } from './style';
import { useTheme } from 'styled-components';

import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import Text from '../../components/Text';
import Pressable from '../../components/Pressable';

import List from './List';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const theme = useTheme();
  const navigation = useNavigation();

  const [historico, setHistorico] = useState([
    { key: '1', type: 'receita', value: 1200 },
    { key: '2', type: 'despesa', value: 200 },
    { key: '3', type: 'receita', value: 40 },
    { key: '4', type: 'receita', value: 89.9 },
    { key: '5', type: 'receita', value: 5600 },
    { key: '6', type: 'despesa', value: 650 },
    { key: '7', type: 'despesa', value: 40.9 },
    { key: '8', type: 'receita', value: 899.9 },
  ]);

  return (
    <Container>
      <Header>
        <Text size={20} bold>
          {user && user.name}
        </Text>
        <Text size={26} bold>
          R$ 1.900,00
        </Text>
        <Text size={14} color='#00b94a' margin={50}>
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
