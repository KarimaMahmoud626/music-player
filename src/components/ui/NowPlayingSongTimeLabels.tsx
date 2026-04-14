import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/theme";
// import { format } from "date-fns";

export type NowPlayingSongTimeLabelsProps = {
  position: number;
  duration: number;
};

export default function NowPlayingSongTimeLabels({
  position,
  duration,
}: NowPlayingSongTimeLabelsProps) {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(position)}</Text>
      <Text style={styles.text}>{formatTime(duration)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 14,
  },
  text: {
    fontFamily: "Gilroy",
    fontSize: 12,
    fontWeight: "400",
    color: Colors.light.text,
  },
});
