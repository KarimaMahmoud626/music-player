import Ionicons from "@react-native-vector-icons/ionicons";
import { TouchableOpacity, View, type ViewProps } from "react-native";
import { useThemeColor } from "../../hooks/use-theme-color";

export type LikeSongButtonProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  iconName: any;
  alternativeIcon: any;
  onPress?: undefined;
  isPressed?: boolean;
};

export default function IconButton({
  style,
  onPress,
  isPressed,
  iconName,
  alternativeIcon,
  lightColor,
  darkColor,
}: LikeSongButtonProps) {
  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "icon",
  );
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isPressed ? iconName : alternativeIcon}
          size={20}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
}
