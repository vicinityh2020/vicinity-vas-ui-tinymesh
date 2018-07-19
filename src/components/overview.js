import React, {Component} from 'react';
import {Col, Row, Table} from 'react-bootstrap';
import RoomInfo from "./overviewRow";
import update from 'immutability-helper';
import moment from 'moment';

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            rooms: null
        };
        this.cleanRoom = this.cleanRoom.bind(this);
        this.updateRoomInfo = this.updateRoomInfo.bind(this);
    }

    cleanRoom(roomNumber) {
        this.state.rooms.map((room, index) => {
            if (room.number === roomNumber) {
                let updateObj = {};
                updateObj[index] = {
                    needsCleaning: {$set: false},
                    visits: {$set: 0}
                };
                this.setState({rooms: update(this.state.rooms, updateObj)});
            }
        });
    }

    updateRoomInfo() {
        fetch('/adapter/room-overview', {
            credentials: "include",
            headers: {}
        }).then(value => {
            return value.json();
        }).then(json => {
            let roomOverview = json;
            for (let room of roomOverview) {
                if(room['lastCleaned'] !== 'Never'){
                    room['lastCleaned'] = moment(room['lastCleaned']).fromNow();
                }
            }
            this.setState({rooms: roomOverview})
        })
    }

    componentDidMount() {
        this.updateRoomInfo()
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    {this.state.rooms ? (
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
                                return (<RoomInfo key={room.number} room={room} setRoomState={this.cleanRoom}
                                                  updateRooms={this.updateRoomInfo}/>)
                            })}
                            </tbody>
                        </Table>) : (<p>Nothing to show</p>)}
                </Col>
            </Row>
        );
    }
}

export default Overview;
