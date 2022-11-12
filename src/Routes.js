import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
