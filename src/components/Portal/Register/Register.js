import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  return (
    <div>
      <div className="register">
        <div className="register__container">
          <h1>Sign Up</h1>
          <form>
            <h5>Name</h5>
            <input type="text" />
            <h5>Email</h5>
            <input type="text" />
            <h5>Phone</h5>
            <input type="text" />
            <h5>Experience in Farming</h5>
            <select className="dropdown">
              <option value="0">Beginner</option>
              <option value="1">Intermediate</option>
              <option value="2">Expert</option>
            </select>
            <h5>Password</h5>
            <input type="password" />
            <h5>Confirm Password</h5>
            <input type="password" />
            <button type="submit" className="register__registerButton">
              Sign Up
            </button>
          </form>
          <p>
            By signing-up you agree to the Farmer's Friend Conditions of Use &
            Sale.
          </p>
          <Link to={"/login"}>
            <button className="register__signInButton">
              Already have an account? Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
