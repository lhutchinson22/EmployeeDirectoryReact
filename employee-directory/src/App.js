import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import User from "./Components/Users/User";
import Wrapper from "./Components/Wrapper/Wrapper";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
      {/* <User /> */}
    </div>
  );
}

export default App;
