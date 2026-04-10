import { View, Image, StyleSheet } from "react-native";

export type NowPlayingSongImageProps = {
  imageSource: undefined;
};

export default function NowPlayingSongImage({
  imageSource,
}: NowPlayingSongImageProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 20,
  },
});
