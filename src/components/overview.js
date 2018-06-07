import React, {Component} from 'react';
import {Button, Col, Glyphicon, Table} from 'react-bootstrap';


class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [{
                number: 1,
                visits: 12,
                lastCleaned: new Date(2018, 6, 2, 13, 37),
                needsCleaning: false,
                comment: null
            }, {
                number: 2,
                visits: 65,
                lastCleaned: new Date(2018, 6, 2, 13, 37),
                needsCleaning: true,
                comment: null
            }]
        }
    }

    render() {
        return (
            <Col sm={6} smOffset={3}>
                <Table striped={true} condensed={true}>
                    <thead>
                    <tr>
                        <th className={"center"}>Room</th>
                        <th className={"center"}>Visits</th>
                        <th className={"center"}>Last Cleaned</th>
                        <th className={"center"}>Clean?</th>
                        <th className={"center"}>Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rooms.map((room) => {
                        return (
                            <tr key={room.number}>
                                <td className={"center"}>{room.number}</td>
                                <td className={"center"}>{room.visits}</td>
                                <td className={"center"}>{room.lastCleaned.toString()}</td>
                                <td className={"center"}>{room.needsCleaning ? (<Glyphicon glyph="remove" className={"red"}/>) : <Glyphicon glyph="ok" className={"green"}/>}</td>
                                <td className={"center"}><Button bsStyle={"primary"}><Glyphicon glyph="info-sign"/></Button></td>
                            </tr>)
                    })}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default Overview;
