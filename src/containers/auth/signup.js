import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const user = userCredentials.user;
      console.log(user.email);
    }
  );

  return null;
};
