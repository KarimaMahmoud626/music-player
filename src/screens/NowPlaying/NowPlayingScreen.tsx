import { StyleSheet, View } from "react-native";
import NowPlayingSongImage from "../../components/ui/NowPlayingSongImage";
import NowPlayingSongCard from "../../components/ui/NowPlayingSongCard";

export default function NowPlayingScreen() {
  return (
    <View style={styles.view}>
      <NowPlayingSongCard
        imageSource={require("../../../assets/moment-apart.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
});
