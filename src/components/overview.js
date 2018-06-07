import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Login from "./login";


class Overview extends Component {
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
            <Table responsive>
                <thead>
                <tr>
                    <th>Room #</th>
                    <th>Visits</th>
                    <th>Last clean time</th>
                    <th>Clean</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>10</td>
                    <td>13.06.18 13:37</td>
                    <td>Yes</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>13</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default Overview;
