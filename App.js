import "react-native-gesture-handler";
import DrawerNavigator from "./src/components/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/UserContext";
export default () => (
  <AuthProvider>
    <DrawerNavigator />
  </AuthProvider>
);
