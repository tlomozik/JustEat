import { View, StyleSheet } from "react-native";
import { Button, Text, Card } from "@rneui/base";
import SignOutButton from "../components/login/SignOutButton";
import { useUser } from "../context/UserContext";

const ProfileScreen = () => {
  const user = useUser();
  console.log(user);
  return (
    <View style={styles.containerStyle}>
      <Card containerStyle={styles.cardStyle}>
        <Text h4>{user?.displayName}</Text>

        <Text h4>{user?.email}</Text>
      </Card>

      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
  },
  cardStyle: {
    alignItems: "center",

    borderRadius: 15,
    elevation: 20,
    width: 300,
    height: 200,
  },
});
export default ProfileScreen;
