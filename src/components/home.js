import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Header from "./header";
import Login from "./login";
import Overview from "./overview";


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        };

        this.setLoggedInStatus = this.setLoggedInStatus.bind(this);
    }

    setLoggedInStatus(){
        this.setState({loggedIn: true});
    }

    loginPage(){
        return <Login doLogin={this.setLoggedInStatus}/>;
    }



    render() {
        return (
            <Grid>
                <Row><Header/></Row>
                {this.state.loggedIn ? (<Overview/>) : this.loginPage()}
            </Grid>
        );
    }
}


export default Home;
