import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
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

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="check" />
          <label class="form-check-label" for="check">
            Check me out
          </label>
        </div>
        <input type="submit" class="btn btn-danger" value="Login" />
      </form>
      <br />
      <p>
        New to Website? <Link to="/registration">Create Account</Link>
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

export default Login;
