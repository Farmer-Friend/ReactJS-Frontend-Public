import Login from "./components/Portal/Login/Login";
import Register from "./components/Portal/Register/Register";
import PortalHeader from "./components/Portal/PortalHeader/PortalHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function PortalRoute() {
  useEffect(() => {});
  return (
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
  );
}

export default PortalRoute;
