import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Login from './components/Login';
import Product from './components/Product';
import SignUp from './components/SignUp';

function App() {
  return (
     <Router>
        <div className="container col-12 px-5">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/login" exact component={Login} />
               <Route path="/signup" exact component={SignUp} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
