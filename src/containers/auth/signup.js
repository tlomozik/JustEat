import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);
};
