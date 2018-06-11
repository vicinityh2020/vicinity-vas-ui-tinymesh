import React, {Component} from 'react';
import {Button, Glyphicon, ListGroup, ListGroupItem, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";

const GlyphOK = () => {
    return (<Glyphicon glyph="ok" className={"green"}/>);
};

const GlyphNotOk = () => {
    return (<Glyphicon glyph="remove" className={"red"}/>);
};

class ModalInfo extends Component {
    static propTypes = {
        room: PropTypes.object,
        show: PropTypes.bool,
        toggleInfo: PropTypes.func,
        setRoomState: PropTypes.func,
    };

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.toggleInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>Room {this.props.room.number}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroupItem header="Status" bsStyle={this.props.room.needsCleaning ? 'danger' : 'success'}>
                            {this.props.room.needsCleaning ?
                                (<span><GlyphNotOk/> Needs cleaning</span>) :
                                (<span><GlyphOK/> Clean</span>)}
                        </ListGroupItem>
                        <ListGroupItem header="Number of room visits">{this.props.room.visits}</ListGroupItem>
                        <ListGroupItem header="Last Cleaned">{this.props.room.lastCleaned.toString()}</ListGroupItem>
                        <ListGroupItem header="Comment">{this.props.room.comment ? this.props.room.comment : "No comment"}</ListGroupItem>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle={"primary"}
                            onClick={this.props.room.needsCleaning ? () => {
                                this.props.toggleInfo();
                                this.props.setRoomState(this.props.room.number);
                            } : () => {}}>Clean</Button>
                    <Button onClick={this.props.toggleInfo}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalInfo;
