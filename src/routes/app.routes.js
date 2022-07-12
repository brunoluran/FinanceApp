import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import New from "../screens/New";
import Profile from "../screens/Profile";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#202020",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#00b94a",
        drawerActiveTintColor: "#fff",
        drawerInactiveBackgroundColor: "#000",
        drawerInactiveTintColor: "#bbb",
        drawerItemStyle: {
          marginVertical: 5,
        },

        headerStyle: {
          backgroundColor: "#202020",
          borderWidth: 0.3,
          borderColor: "#404040",
        },
        headerTintColor: "#fff",

        headerBackTitleVisible: false,
        headerTitle: "",
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="New" component={New} />
      <AppDrawer.Screen name="Profile" component={Profile} />
    </AppDrawer.Navigator>
  );
}
