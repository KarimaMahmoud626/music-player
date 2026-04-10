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
  //   const formatTime = (time: number) => {
  //     return format(new Date(time * 1000), "mm:ss");
  //   };

  return (
    <View style={styles.container}>
      {/* <Text>{formatTime(position)}</Text>
      <Text>{formatTime(duration)}</Text> */}
      <Text style={styles.text}>
        {position >= 0
          ? `${Math.floor(position / 60)}:${String(Math.floor(position % 60)).padStart(2, "0")}`
          : "0:00"}
      </Text>
      <Text style={styles.text}>
        {duration >= 0
          ? `${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, "0")}`
          : "0:00"}
      </Text>
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
