import React from "react";
import "./normalize.css";
import "./App.css";

import { createStore } from "redux";
import { catReducer as reducer } from "./reducers/catReducer";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import CatButton from "./components/CatButton";
import CatFact from "./components/CatFact";
import Favorites from "./components/Favorites";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/random">
            <CatButton />
            <CatFact />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
