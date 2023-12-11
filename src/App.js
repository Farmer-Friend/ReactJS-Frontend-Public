import { activity_log } from "./functions/activity_log";
import "./App.css";
import Login from "./components/Portal/Login/Login";
import Register from "./components/Portal/Register/Register";
import PortalHeader from "./components/Portal/PortalHeader/PortalHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    activity_log(user, setPath, path);
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/portal" element={<PortalHeader user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
