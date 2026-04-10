import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "../../hooks/use-theme-color";

export type ScreenHeaderProps = {
  screenName: string;
  lightColor?: string;
  darkColor?: string;
};

export default function ScreenHeader({
  screenName,
  lightColor,
  darkColor,
}: ScreenHeaderProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const navigate = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color={color} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: color }]}>{screenName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 32,
  },
  backButton: {
    flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    flex: 2,
    fontSize: 20,
    fontFamily: "Gilroy",
    fontWeight: "600",
    alignSelf: "center",
    paddingHorizontal: 16,
  },
});
