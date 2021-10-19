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
    isLogin ? createNewUser(email, password) : processLogin(email, password);
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
      <h1>{isLogin ? "Register: Create Account" : "Login"}</h1>
      <form onSubmit={handleRegistration}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onBlur={handleEmailChange}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChange}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onClick={toggleLogin}
            type="checkbox"
            className="form-check-input"
            id="check"
          />
          <label className="form-check-label" htmlFor="check">
            Haven't registered yet?
          </label>
        </div>
        <input
          type="submit"
          className="btn btn-danger"
          value={isLogin ? "Register" : "Login"}
        />
      </form>
      <br />
      <p>
        Haven't registered yet? <Link to="/registration">Create Account</Link>
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
