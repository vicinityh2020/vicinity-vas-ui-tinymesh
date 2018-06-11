import React, {Component} from 'react';
import {Col, Table} from 'react-bootstrap';
import RoomInfo from "./overviewRow";
import update from 'immutability-helper';

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
        };
        this.cleanRoom = this.cleanRoom.bind(this);
    }

    cleanRoom(roomNumber){
        this.state.rooms.map((room, index) => {
            if (room.number === roomNumber){
                let updateObj = {};
                updateObj[index] = {
                    needsCleaning: {$set: false},
                    visits: {$set: 0}
                };
                this.setState({rooms: update(this.state.rooms, updateObj)});
            }
        });
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
                        return (<RoomInfo key={room.number} room={room} setRoomState={this.cleanRoom}/>)
                    })}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default Overview;
