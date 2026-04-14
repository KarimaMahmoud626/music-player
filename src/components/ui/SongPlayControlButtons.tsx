import { View } from "react-native";
import IconButton from "./IconButton";

export type SongPlayControlButtonsProps = {
  playPauseIsPressed?: boolean;
  playPauseOnPress?: any;
  skipBackIsPressed?: boolean;
  skipBackOnPress?: any;
  skipForwardIsPressed?: boolean;
  skipForwardOnPress?: any;
};

export default function SongPlayControlButtons({
  playPauseIsPressed,
  playPauseOnPress,
}: SongPlayControlButtonsProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <IconButton
        iconName="play-skip-back-outline"
        alternativeIcon={"play-skip-back-outline"}
        iconSize={38}
      />
      <IconButton
        iconName="pause-outline"
        alternativeIcon={"play-outline"}
        iconSize={38}
        isPressed={playPauseIsPressed}
        onPress={playPauseOnPress}
      />
      <IconButton
        iconName="play-skip-forward-outline"
        alternativeIcon={"play-skip-forward-outline"}
        iconSize={38}
      />
    </View>
  );
}
