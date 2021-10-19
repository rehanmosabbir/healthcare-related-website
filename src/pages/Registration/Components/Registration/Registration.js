import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuth from "../../../../hooks/useAuth";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  const { signInWithGoogle, setError, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <h1>{isLogin ? "Login" : "Register: Create Account"}</h1>
      <form onSubmit={handleRegistration}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            onClick={toggleLogin}
            type="checkbox"
            class="form-check-input"
            id="check"
          />
          <label class="form-check-label" for="check">
            Already Registered?
          </label>
        </div>
        <input
          type="submit"
          class="btn btn-danger"
          value={isLogin ? "Login" : "Register"}
        />
      </form>
      <br />
      <p>
        Already have an account? <Link to="/login">login</Link>
      </p>
      <br />
      <p>--------------------or------------------</p>
      <br />

      <button onClick={handleGoogleLogIn} className="btn btn-danger">
        Sign in with Google
      </button>
    </div>
  );
};

export default Registration;
