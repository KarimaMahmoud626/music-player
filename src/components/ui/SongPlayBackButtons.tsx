import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";

export type SongPlayBackButtonsProps = {
  onVolume: any;
  onRepeat: any;
  onShuffle: any;
  toggleVolume: boolean;
};

export default function SongPlayBackButtons({
  onVolume,
  onRepeat,
  onShuffle,
  toggleVolume,
}: SongPlayBackButtonsProps) {
  return (
    <View style={styles.row}>
      <IconButton
        style={styles.button}
        iconName={"volume-mute-outline"}
        alternativeIcon={"volume-high-outline"}
        onPress={onVolume}
        isPressed={toggleVolume}
      />
      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
      >
        <IconButton
          style={styles.button}
          iconName={"repeat-outline"}
          alternativeIcon={"repeat-outline"}
          onPress={onRepeat}
        />
        <IconButton
          style={styles.button}
          iconName={"shuffle-outline"}
          alternativeIcon={"shuffle-outline"}
          onPress={onShuffle}
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
