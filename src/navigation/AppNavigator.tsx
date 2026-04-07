import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import NowPlayingScreen from "../screens/NowPlaying/NowPlayingScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: { headerShown: false },
    },
    SignUp: {
      screen: SignUpScreen,
      options: { headerShown: false },
    },
    // MainApp: {
    //   screen: DrawerNavigator,
    //   options: { headerShown: false },
    // },
    NowPlaying: {
      screen: NowPlayingScreen,
      options: { headerShown: false },
    },
    Library: {
      screen: LibraryScreen,
      options: { headerShown: false },
    },
  },
});

const AppNavigator = createStaticNavigation(Stack);

export default AppNavigator;
