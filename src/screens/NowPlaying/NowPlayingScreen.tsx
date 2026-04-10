import { StyleSheet, View } from "react-native";
import NowPlayingSongCard from "../../components/ui/NowPlayingSongCard";
import SongPlayBackButtons from "../../components/ui/SongPlayBackButtons";
import { ThemedView } from "../../components/themed-view";

export default function NowPlayingScreen() {
  return (
    <ThemedView style={styles.view}>
      <NowPlayingSongCard
        imageSource={require("../../../assets/moment-apart.jpg")}
      />
      <View style={{ height: 40 }} />
      <SongPlayBackButtons />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
