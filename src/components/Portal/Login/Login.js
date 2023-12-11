import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login({ setUser }) {
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    const phoneNo = document.querySelector('input[name="phoneno"]').value;
    const password = document.querySelector('input[name="password"]').value;
    let response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNo,
        password,
      }),
    });
    response = await response.json();
    if (response.message) {
      throw new Error(response.message);
    } else {
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
      navigate("/portal");
    }
  }
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (!data.message) {
  //           console.log("Login successful");
  //           localStorage.setItem("user", JSON.stringify(data));
  //           setUser(data);
  //           navigate("/portal");
  //         } else {
  //           console.log(data);
  //           alert("Login failed");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleLogin(e)}>
            <h5>Phone Number</h5>
            <input type="text" name="phoneno" />
            <h5>Password</h5>
            <input type="password" name="password" />
            <button type="submit" className="login__signInButton">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the Farmer's Friend Conditions of Use &
            Sale.
          </p>
          <Link to={"/register"}>
            <button className="login__registerButton">
              Create your Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
