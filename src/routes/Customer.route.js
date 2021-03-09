import React from "react";
import Nav from "../components/Nav";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Profile from "../pages/Profile";
import Board from "../pages/Board";
import Boardwrite from "../pages/Boardwrite";
import Boardview from "../components/BoardView";

const Customer = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/boardwrite" component={Boardwrite} />
        <Route exact path="/board/:id" component={Boardview} />
      </Switch>
    </div>
  );
};

export default Customer;
