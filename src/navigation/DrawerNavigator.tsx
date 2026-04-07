import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import LikedSongsScreen from "../screens/LikedSongs/LikedSongsScreen";
import PlaylistScreen from "../screens/Playlist/PlaylistScreen";

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Playlist: PlaylistScreen,
    LikedSongs: LikedSongsScreen,
  },
});

export default Drawer.Navigator;
