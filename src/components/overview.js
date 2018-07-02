import React, {Component} from 'react';
import {Button, Col, Row, Table} from 'react-bootstrap';
import RoomInfo from "./overviewRow";
import update from 'immutability-helper';

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            // rooms: [{
            //     number: 1,
            //     visits: 12,
            //     lastCleaned: new Date(2018, 6, 2, 13, 37),
            //     needsCleaning: false,
            //     comment: null
            // }, {
            //     number: 2,
            //     visits: 65,
            //     lastCleaned: new Date(2018, 6, 2, 13, 37),
            //     needsCleaning: true,
            //     comment: null
            // }]
            rooms: null
        };
        this.cleanRoom = this.cleanRoom.bind(this);
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

    fetchRoomOverview() {
        fetch('/adapter/room-overview', {credentials: "include"}).then(value => {
            // console.log(value.headers.has("set-cookie"))
            return value.json();
        }).then(json => {
            console.log(json);
            let roomOverview = json;
            for (let obj of roomOverview){
                obj['lastCleaned'] = new Date();
            }
            this.setState({rooms: roomOverview})
        }).catch(reason => console.log(reason))
    }

    componentDidMount(){
        this.fetchRoomOverview()
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
                                return (<RoomInfo key={room.number} room={room} setRoomState={this.cleanRoom}/>)
                            })}
                            </tbody>
                        </Table>) : (<p>Nothing to show</p>)}
                </Col>
            </Row>
        );
    }
}

export default Overview;
