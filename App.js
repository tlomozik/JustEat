import "react-native-gesture-handler";
import DrawerNavigator from "./src/components/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/UserContext";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
export default () => (
  <AuthProvider>
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>
  </AuthProvider>
);
