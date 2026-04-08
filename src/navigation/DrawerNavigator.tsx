import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import LikedSongsScreen from "../screens/LikedSongs/LikedSongsScreen";
import PlaylistScreen from "../screens/Playlist/PlaylistScreen";
import { useThemeColor } from "../hooks/use-theme-color";
import Ionicons from "@react-native-vector-icons/ionicons";
import { View } from "react-native";

export type drawerType = {
  Home: undefined;
  Playlist: undefined;
  LikedSongs: undefined;
};

export type DrawerItemProps = {
  lightColor?: string;
  darkColor?: string;
};

const Drawer = createDrawerNavigator<drawerType>();

const DrawerNavigator = ({ lightColor, darkColor }: DrawerItemProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  const tintColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
  );
  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "icon",
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: tintColor,
        drawerActiveBackgroundColor: backgroundColor,
        drawerContentStyle: {
          backgroundColor: backgroundColor,
        },
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" color={iconColor} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="LikedSongs"
        component={LikedSongsScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="heart-outline" color={iconColor} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="musical-notes-outline"
              color={iconColor}
              size={22}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
