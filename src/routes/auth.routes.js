import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='SignIn' component={SignIn} />
    </AuthStack.Navigator>
  );
}
