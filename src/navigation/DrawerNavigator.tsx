import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import LikedSongsScreen from "../screens/LikedSongs/LikedSongsScreen";
import PlaylistScreen from "../screens/Playlist/PlaylistScreen";

export type drawerType = {
  Home: undefined;
  Playlist: undefined;
  LikedSongs: undefined;
};

const Drawer = createDrawerNavigator<drawerType>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="LikedSongs" component={LikedSongsScreen} />
      <Drawer.Screen name="Playlist" component={PlaylistScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
