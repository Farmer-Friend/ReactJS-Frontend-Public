import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
function Register({ user, setUser }) {
  const navigate = useNavigate();
  function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNo = document.querySelector('input[name="phone"]').value;
    const experience = document.querySelector(
      'select[name="experience"]'
    ).value;
    const password = document.querySelector('input[name="password"]').value;
    const repeat_password = document.querySelector(
      'input[name="repeat_password"]'
    ).value;

    if (name == "") {
      document.querySelector(".register__error").innerText =
        "Name cannot be empty";
      return false;
    }
    if (phoneNo == "") {
      document.querySelector(".register__error").innerText =
        "Phone Number cannot be empty";
      return false;
    }
    if (email != "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.querySelector(".register__error").innerText = "Invalid email";
        return false;
      }
    }
    if (phoneNo.length != 10) {
      document.querySelector(".register__error").innerText =
        "Phone Number should be 10 digits";
      return false;
    }
    if (isNaN(phoneNo)) {
      document.querySelector(".register__error").innerText =
        "Phone Number should be a number";
      return false;
    }
    if (experience == "") {
      document.querySelector(".register__error").innerText =
        "Experience cannot be empty";
      return false;
    }
    if (password == "") {
      document.querySelector(".register__error").innerText =
        "Password cannot be empty";
      return false;
    }
    if (repeat_password == "") {
      document.querySelector(".register__error").innerText =
        "Repeat Password cannot be empty";
      return false;
    }
    if (password != repeat_password) {
      document.querySelector(".register__error").innerText =
        "Passwords do not match";
      return false;
    }

    return true;
  }

  function handleRegister(e) {
    e.preventDefault();
    if (!validateForm()) return;

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNo = document.querySelector('input[name="phone"]').value;
    const experience = document.querySelector(
      'select[name="experience"]'
    ).value;
    const password = document.querySelector('input[name="password"]').value;
    document.querySelector(".register__registerButton").innerHTML =
      "Signing Up...";
    document.querySelector(".register__registerButton").disabled = true;
    fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNo,
        experience,
        password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          throw new Error(response.message);
        } else {
          localStorage.setItem("user", JSON.stringify(response));
          setUser(response);
          navigate("/portal");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);

        if (error.message == "User already exists") navigate("/login");
      })
      .finally(() => {
        document.querySelector(".register__registerButton").innerText =
          "Sign Up";
        document.querySelector(".register__registerButton").disabled = false;
      });
  }

  return (
    <div>
      <div className="register">
        <div className="register__container">
          <div className="register__error"></div>
          <form onSubmit={(e) => handleRegister(e)}>
            <h1>Sign Up</h1>
            <h5>Name</h5>
            <input type="text" name="name" />
            <h5>Email</h5>
            <input type="email" name="email" />
            <h5>Phone</h5>
            <input type="text" name="phone" />
            <h5>Experience in Farming</h5>
            <select className="dropdown" name="experience">
              <option value="0">Beginner</option>
              <option value="1">Intermediate</option>
              <option value="2">Expert</option>
            </select>
            <h5>Password</h5>
            <input type="password" name="password" />
            <h5>Confirm Password</h5>
            <input type="password" name="repeat_password" />
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
