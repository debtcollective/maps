import React from "react";
import { Route, Link } from "react-router-dom";
import {
  TotalDebtMap,
  AutoPerCapitaDebtMap,
  CreditCardPerCapitaDebtMap,
  MortagePerCapitaDebtMap,
  StudentLoanPerCapitaDebtMap
} from "./components";

const Index = () => (
  <div>
    <h1>Debt Maps</h1>
    <ul>
      <li>
        <Link to="/total">Total</Link>
      </li>
      <li>
        <Link to="/auto-per-capita">Auto Per Capita</Link>
      </li>
      <li>
        <Link to="/credit-card-per-capita">Credit Card Per Capita</Link>
      </li>
      <li>
        <Link to="/mortage-per-capita">Mortage Per Capita</Link>
      </li>
      <li>
        <Link to="/student-loan-per-capita">Student Loan Per Capita</Link>
      </li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <Route exact path="/" component={Index} />
    <Route path="/total" component={TotalDebtMap} />
    <Route path="/auto-per-capita" component={AutoPerCapitaDebtMap} />
    <Route
      path="/credit-card-per-capita"
      component={CreditCardPerCapitaDebtMap}
    />
    <Route path="/mortage-per-capita" component={MortagePerCapitaDebtMap} />
    <Route
      path="/student-loan-per-capita"
      component={StudentLoanPerCapitaDebtMap}
    />
  </div>
);

export default App;
