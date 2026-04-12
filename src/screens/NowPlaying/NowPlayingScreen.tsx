import { StyleSheet, View } from "react-native";
import NowPlayingSongCard from "../../components/ui/NowPlayingSongCard";
import SongPlayBackButtons from "../../components/ui/SongPlayBackButtons";
import { ThemedView } from "../../components/themed-view";
import PlayingSongProgressBar from "../../components/ui/PlayingSongProgressBar";
import NowPlayingSongTimeLabels from "../../components/ui/NowPlayingSongTimeLabels";
import SongPlayControlButtons from "../../components/ui/SongPlayControlButtons";
import { useSelector } from "react-redux";
import { selectCurrentTrack } from "../../redux/store/music/trackSlice";
import { useMusicPlayer } from "../../hooks/useMusicPlayer";
import { useEffect, useState } from "react";

const track = {
  preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  title: "Test Song",
  artist: { name: "Test Artist" },
  album: {
    cover: "https://picsum.photos/300",
  },
};

export default function NowPlayingScreen() {
  const currentTrack = useSelector(selectCurrentTrack);
  const [isVolumed, setIsVolumed] = useState(false);
  const {
    isPlaying,
    position,
    duration,
    togglePlay,
    seekTo,
    changeVolume,
    toggleMute,
    cycleRepeat,
    toggleShuffle,
  } = useMusicPlayer(track?.preview);

  return (
    <ThemedView style={styles.view}>
      <NowPlayingSongCard
        imageSource={
          // currentTrack?.coverUrl
          track.album.cover
            ? // ? { uri: currentTrack.coverUrl }
              { uri: track.album.cover }
            : require("../../../assets/moment-apart.jpg")
        }
        songName={track.title ?? "Unknown"}
        artistName={track.artist.name ?? "Unknown"}
      />
      <View style={{ height: 40 }} />
      <SongPlayBackButtons
        onRepeat={cycleRepeat}
        onShuffle={toggleShuffle}
        onVolume={() => {
          toggleMute();
          setIsVolumed(!isVolumed);
        }}
        toggleVolume={isVolumed}
      />
      <View style={{ height: 60 }} />
      <NowPlayingSongTimeLabels position={position} duration={duration} />
      <View style={{ height: 8 }} />
      <PlayingSongProgressBar
        position={position}
        duration={duration}
        onValueChange={seekTo}
      />
      <View style={{ height: 40 }} />
      <SongPlayControlButtons
        playPauseIsPressed={isPlaying}
        playPauseOnPress={togglePlay}
      />
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
