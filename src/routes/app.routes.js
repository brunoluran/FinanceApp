import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name='Home' component={Home} />
    </AuthStack.Navigator>
  );
}
