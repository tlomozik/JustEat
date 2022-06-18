import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const signout = () => {
  signOut(auth)
    .then(() => {
      console.log("Signout succesful");
      console.log(auth);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
export default signout;
