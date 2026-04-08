import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import LibraryScreen from "../screens/Library/LibraryScreen";
import NowPlayingScreen from "../screens/NowPlaying/NowPlayingScreen";
import DrawerNavigator from "./DrawerNavigator";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../components/ui/ScreenHeader";

export type MainStack = {
  Login: undefined;
  SignUp: undefined;
  Library: undefined;
  NowPlaying: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<MainStack>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="NowPlaying"
        component={NowPlayingScreen}
        options={{
          headerShown: true,
          header: () => <ScreenHeader screenName="Playing Now" />,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
