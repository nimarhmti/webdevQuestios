import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Poems from "./Pages/PoemsPage/Poems";
import Button from "./Components/UI/Button";
import Navbar from "./Components/Navbar/Navbar";
import Validation from "./Pages/Validation/Validation";
import Owghat from "./Pages/Owghat";
import BankLoans from "./Pages/Bank loans/BankLoans";
import Exchange from "./Pages/exchange/Exchange";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Poems} exact />
        <Route path="/poems" component={Poems} />
        <Route path="/validation" component={Validation} />
        <Route path="/prayertimes" component={Owghat} />
        <Route path="/Bankloans" component={BankLoans} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </div>
  );
}

export default App;
