import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />
      <Routes />
    </NavigationContainer>
  );
}
