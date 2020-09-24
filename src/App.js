import React from 'react';
import image from "../src/836 [Converted].svg";

import Store from "./store/store";
import {Provider} from "react-redux";

import {Link} from "react-router-dom";
import { Switch, Route} from "react-router-dom";
import Main from "./components/main";
import Tech from "./components/tech";
import Login from './components/pages/Login'
import PrivateRoute from  './components/pages/routes/privateRoute'


function App() {
  return (
    <Provider store={Store}>

      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/tech">Tech</Link></li>
            <li><Link to="/login">Login </Link></li>
          </ul>
        </nav>

        <main>
        <Switch>
        <PrivateRoute exact path = '/' component={Main}/>
        <PrivateRoute exact path = '/tech' component={Tech}/>
        <Route exact path = '/login' component={Login}/>            
        </Switch>
        </main>

      </div>
    </Provider>

  );
}

export default App;
