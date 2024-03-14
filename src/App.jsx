import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
/*<header><nav>
      {isVisible && <NavLink exact to='/'>Anasayfa</NavLink>}
      {isVisible && <NavLink exact to='/order'>Order</NavLink>}
      {isVisible && <NavLink exact to='/success'>Success</NavLink>}
      </nav></header>*/
