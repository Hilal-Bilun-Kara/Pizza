import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success";

function App() {
  return (
    <>
    <header><nav>
      <NavLink exact to='/'>Anasayfa</NavLink>
      <NavLink exact to='/order'>Order</NavLink>
      <NavLink exact to='/success'>Success</NavLink>
      </nav></header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/order">
          <Order />
        </Route>

        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
