import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import ModalInfo from "./ModalInfo";


class RoomInfo extends Component {

    constructor(props) {
        super(props);
        this.state= {
            showInfo: false
        };

        this.toggleInfo = this.toggleInfo.bind(this)
    }

    toggleInfo(){
        this.setState(
            {showInfo: !this.state.showInfo}
        );
    }

    render() {
        return (
            <tr key={this.props.room.number}>
                <td className={"center"}>{this.props.room.number}</td>
                <td className={"center"}>{this.props.room.visits}</td>
                <td className={"center"}>{this.props.room.lastCleaned.toString()}</td>
                <td className={"center"}>{this.props.room.needsCleaning ?
                    (<Glyphicon glyph="remove" className={"red"}/>) :
                    <Glyphicon glyph="ok" className={"green"}/>}</td>
                <td className={"center"}>
                    <Button bsStyle={"primary"} onClick={this.toggleInfo}>
                        <Glyphicon glyph="info-sign"/>
                    </Button>
                </td>

                <ModalInfo room={this.props.room}
                           toggleInfo={this.toggleInfo}
                           show={this.state.showInfo}/>
            </tr>
        );
    }
}

export default RoomInfo;