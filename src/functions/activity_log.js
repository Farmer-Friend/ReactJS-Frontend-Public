import { Navigate } from "react-router-dom";
export function activity_log(user, setPath, path) {
  if (user) {
    const loggedIn = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/activity/activity?sessionID=" +
            user.sessionToken +
            "&action=" +
            window.location.pathname,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 404) {
          return false;
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (err) {
        return false;
      }
    };
    if (path.startsWith("/portal") && !loggedIn()) {
      Navigate("/login");
    }
  } else {
  }
}
