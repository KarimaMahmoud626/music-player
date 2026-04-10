import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";

export default function SongPlayBackButtons() {
  return (
    <View style={styles.row}>
      <IconButton
        style={styles.button}
        iconName={"volume-mute-outline"}
        alternativeIcon={"volume-high-outline"}
      />
      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
      >
        <IconButton
          style={styles.button}
          iconName={"repeat-outline"}
          alternativeIcon={"repeat-outline"}
        />
        <IconButton
          style={styles.button}
          iconName={"shuffle-outline"}
          alternativeIcon={"shuffle-outline"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 14,
  },
});
