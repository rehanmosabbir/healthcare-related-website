import React from "react";
import useAuth from "../../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={signInWithGoogle} className="btn btn-danger">
        Google Login
      </button>
    </div>
  );
};

export default Login;
