import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/home';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*<Route path={'/overview'} component={Test}/>*/}
                    <Route component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
