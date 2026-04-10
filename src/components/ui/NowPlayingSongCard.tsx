import { View, Text, StyleSheet } from "react-native";
import NowPlayingSongImage from "./NowPlayingSongImage";
import LikeSongButton from "./LikeSongButton";
import { Colors } from "../../constants/theme";

export type NowPlayingSongCardProps = {
  imageSource: undefined;
  isLiked?: boolean;
};

export default function NowPlayingSongCard({
  imageSource,
  isLiked,
}: NowPlayingSongCardProps) {
  return (
    <View style={styles.card}>
      <NowPlayingSongImage imageSource={imageSource} />
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={[styles.songName]}>Moment Apart</Text>
          <Text style={[styles.atistName]}>Odesza</Text>
        </View>
        <View>
          <LikeSongButton
            iconColor={Colors.light.icon}
            isPressed={isLiked ?? false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 260,
    marginTop: 16,
  },
  songName: {
    fontFamily: "Gilroy",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.text,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  atistName: {
    marginTop: 6,
    fontFamily: "Gilroy",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 1,
    color: Colors.light.subText,
  },
});
