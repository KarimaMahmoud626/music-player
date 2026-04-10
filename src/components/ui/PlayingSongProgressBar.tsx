import Slider from "@react-native-community/slider";
import { Colors } from "../../constants/theme";
import { View } from "react-native";

export type PlayingSongProgressBarProps = {
  position: number;
  duration: number;
  onValueChange?: (value: number) => void;
};

export default function PlayingSongProgressBar({
  position,
  duration,
  onValueChange,
}: PlayingSongProgressBarProps) {
  return (
    <View style={{ width: "100%" }}>
      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={(value) => onValueChange?.(value)}
        minimumTrackTintColor={Colors.light.progressTrack}
        maximumTrackTintColor={Colors.light.icon}
        thumbTintColor={Colors.light.progressTrack}
      />
    </View>
  );
}
