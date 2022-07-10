import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/auth';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={'transparent'} barStyle='light-content' translucent={true} />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
