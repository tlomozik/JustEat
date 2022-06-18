import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
