import { TouchableOpacity } from "react-native";
import { ThemedView } from "../../components/themed-view";
import { ThemedText } from "../../components/themed-text";
import { useNavigation } from "@react-navigation/native";
import { MainStack } from "../../navigation/AppNavigator";

export default function LoginScreen() {
  const navigation = useNavigation<MainStack>();
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText>Login</ThemedText>
      <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
        <ThemedText>tab</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
