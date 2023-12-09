import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./component/SignUp";
import LoginPage from "./component/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";
import SignInSide from "./component/Login";
import BasicDateCalendar from "./component/calendar";



function App() {
  return (

    <div className="App">
      <BrowserRouter>


        <Route path="/LoginPage" exact component={LoginPage} />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/calendar" component={BasicDateCalendar} />

      </BrowserRouter>


    </div>

  );
}

export default App;
