import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
     <Router>
        <div className="container col-12 px-5">
            <Header />
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
