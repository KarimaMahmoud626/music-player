import { View, Text, TouchableOpacity } from "react-native";
import { ThemedView } from "../../components/themed-view";
import { ThemedText } from "../../components/themed-text";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText>Login</ThemedText>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <ThemedText>tab</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
