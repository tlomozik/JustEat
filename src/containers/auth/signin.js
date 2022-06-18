import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
