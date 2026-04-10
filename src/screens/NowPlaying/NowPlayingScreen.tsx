import { StyleSheet, View } from "react-native";
import NowPlayingSongCard from "../../components/ui/NowPlayingSongCard";
import SongPlayBackButtons from "../../components/ui/SongPlayBackButtons";
import { ThemedView } from "../../components/themed-view";
import PlayingSongProgressBar from "../../components/ui/PlayingSongProgressBar";
import NowPlayingSongTimeLabels from "../../components/ui/NowPlayingSongTimeLabels";
import SongPlayControlButtons from "../../components/ui/SongPlayControlButtons";

export default function NowPlayingScreen() {
  return (
    <ThemedView style={styles.view}>
      <NowPlayingSongCard
        imageSource={require("../../../assets/moment-apart.jpg")}
      />
      <View style={{ height: 40 }} />
      <SongPlayBackButtons />
      <View style={{ height: 60 }} />
      <NowPlayingSongTimeLabels position={120} duration={240} />
      <View style={{ height: 8 }} />
      <PlayingSongProgressBar position={120} duration={240} />
      <View style={{ height: 40 }} />
      <SongPlayControlButtons />
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
