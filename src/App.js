import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Overview from "./components/overview";
import {Grid, Row} from "react-bootstrap";
import Header from "./components/header";
import Login from "./components/login";
import './index.css';


class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <BrowserRouter>
                        <Switch>
                            <Route path={'/overview'} component={Overview}/>
                            <Route component={Login}/>
                        </Switch>
                    </BrowserRouter>
                </Row>
            </Grid>
        );
    }
}

export default App;
