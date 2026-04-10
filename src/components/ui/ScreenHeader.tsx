import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/theme";

export type ScreenHeaderProps = {
  screenName: string;
};

export default function ScreenHeader({ screenName }: ScreenHeaderProps) {
  const navigate = useNavigation();
  return (
    <View style={[styles.header, { backgroundColor: Colors.light.background }]}>
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        style={styles.backButton}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={Colors.light.icon}
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: Colors.light.text }]}>
        {screenName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 32,
    paddingBottom: 16,
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
