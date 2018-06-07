import React, {Component} from 'react';
import {Col, Table} from 'react-bootstrap';
import RoomInfo from "./overviewRow";


class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo:false,
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
            <Col xs={12}>
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
                        return (<RoomInfo key={room.number} room={room}/>)
                    })}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default Overview;
