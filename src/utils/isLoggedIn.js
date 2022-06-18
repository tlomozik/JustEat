import { useUser } from "../context/UserContext";
export const isLoggedIn = () => {
  const user = useUser();
  if (user?.email) {
    return true;
  } else return false;
};
