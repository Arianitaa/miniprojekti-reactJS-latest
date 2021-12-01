import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomersComponent from "./components/Customers.component";
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";
import ProductComponent from "./components/Product.component";
import AddCustomerComponent from "./components/AddCustomer.component";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                  <Switch>
                      <Route exact path="/" component={CustomersComponent}/>
                      <Route exact path="/customers" component={CustomersComponent}/>
                      <Route exact path="/products" component={ProductComponent}/>
                      <Route exact path="/add-customer" component={AddCustomerComponent}/>

                  </Switch>
                </div>
                <FooterComponent/>
           </Router>
           </div>

    );
}

export default App;
