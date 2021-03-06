import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { ActivityIndicator, View } from "react-native";

export default function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
