import { View, Text, StyleSheet, type ViewProps } from "react-native";
import NowPlayingSongImage from "./NowPlayingSongImage";
import { useThemeColor } from "../../hooks/use-theme-color";

export type NowPlayingSongCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  imageSource: undefined;
};

export default function NowPlayingSongCard({
  lightColor,
  darkColor,
  imageSource,
}: NowPlayingSongCardProps) {
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
  );
  const subTextColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "subText",
  );

  return (
    <View style={styles.card}>
      <NowPlayingSongImage imageSource={imageSource} />
      <Text style={[styles.songName, { color: textColor }]}>Moment Apart</Text>
      <Text style={[styles.atistName, { color: subTextColor }]}>Odesza</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  songName: {
    fontFamily: "Gilroy",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
  },

  atistName: {
    marginTop: 6,
    fontFamily: "Gilroy",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 1,
  },
});
