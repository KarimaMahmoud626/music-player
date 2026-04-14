import Ionicons from "@react-native-vector-icons/ionicons";
import { TouchableOpacity, View } from "react-native";

export type LikeSongButtonProps = {
  iconColor: string;
  onPress?: undefined;
  isPressed: boolean;
};

export default function LikeSongButton({
  iconColor,
  onPress,
  isPressed,
}: LikeSongButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isPressed ? "heart" : "heart-outline"}
          size={24}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
}
