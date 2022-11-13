import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import GetAllComplaints from "./pages/GetAllComplaints";
import NewComplaint from "./pages/NewComplaint";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/home" exact component={Home} />
        <Route path="/newComplaint" exact component={NewComplaint} />
        <Route path="/getAllComplaints" exact component={GetAllComplaints} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
