import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default ({ email, password, name }) => {
  console.log(name);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
