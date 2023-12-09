import "./Login.css";
function Login() {
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>Username</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button type="submit" className="login__signInButton">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the Farmer's Friend Conditions of Use &
            Sale.
          </p>
          <button className="login__registerButton">Create your Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
