import {
  useAudioPlayer,
  useAudioPlayerStatus,
  setAudioModeAsync,
} from "expo-audio";
import { useEffect, useState } from "react";

export function useMusicPlayer(streamUrl: string | null) {
  const player = useAudioPlayer(streamUrl ? { uri: streamUrl } : null);
  const status = useAudioPlayerStatus(player);
  const [volume, setVolume] = useState(1);
  const [repeatMode, setRepeatMode] = useState<"off" | "one" | "all">("off");
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    console.log("streamUrl:", streamUrl);
    if (streamUrl) {
      player.pause();
    }
  }, [streamUrl]);

  useEffect(() => {
    if (status.didJustFinish) {
      if (repeatMode === "one") {
        player.seekTo(0);
        player.play();
      }
    }
  }, [status.didJustFinish]);

  const togglePlay = () => {
    if (status.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  const seekTo = (seconds: number) => {
    player.seekTo(seconds);
  };

  const changeVolume = (value: number) => {
    player.volume = value;
    setVolume(value);
  };

  const toggleMute = async () => {
    if (volume > 0) {
      await setAudioModeAsync({
        shouldPlayInBackground: true,
        playsInSilentMode: true,
      });
      player.volume = 0;
      setVolume(0);
      console.log("Muted");
    } else {
      player.volume = 1;
      setVolume(1);
      console.log("Unmuted");
    }
  };

  const cycleRepeat = () => {
    setRepeatMode((prev) => {
      const next = prev === "off" ? "one" : prev === "one" ? "all" : "off";
      console.log("Repeat mode:", next);
      return next;
    });
  };

  const toggleShuffle = () => {
    setIsShuffle((prev) => {
      console.log("Shuffle:", !prev);
      return !prev;
    });
  };
  return {
    isPlaying: status.playing,
    position: status.currentTime ?? 0,
    duration: status.duration ?? 0,
    volume,
    repeatMode,
    isShuffle,
    togglePlay,
    seekTo,
    changeVolume,
    toggleMute,
    cycleRepeat,
    toggleShuffle,
  };
}
