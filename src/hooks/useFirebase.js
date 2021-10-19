import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    //   setError("");
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // });
  };

  // Observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    signInWithGoogle,
    user,
    error,
    logOut,
    isLoading,
    setUser,
    setError,
    setIsLoading,
  };
};

export default useFirebase;
