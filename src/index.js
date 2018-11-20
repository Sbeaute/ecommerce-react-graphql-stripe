import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "gestalt/dist/gestalt.css";

import  App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    <Router>
        <Switch>
            <Route components={App} exact path="/" />
            <Route components={Signin} path="/signin" /> 
            <Route components={Signup} path="/signup" />
            <Route components={Checkout} path="/checkout" />
        </Switch>
    </Router>    
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
