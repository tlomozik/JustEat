import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import LoginScreen from "../../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { isLoggedIn } from "../../utils/isLoggedIn";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {},
          headerStyle: {
            height: 80,
            backgroundColor: "#EF233C",
          },
          drawerActiveTintColor: "#D90429",
          drawerLabelStyle: { fontSize: 20 },
        }}
      >
        {!isLoggedIn() ? (
          <Drawer.Screen
            name="Login"
            options={{
              title: "Login",
              drawerIcon: ({ focused, size }) => (
                <AntDesign name="user" size={24} color="black" />
              ),
            }}
            component={LoginScreen}
          />
        ) : (
          <Drawer.Screen
            name="Profile"
            options={{
              title: "Profile",
              drawerIcon: ({ focused, size }) => (
                <AntDesign name="user" size={24} color="black" />
              ),
            }}
            component={ProfileScreen}
          />
        )}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;