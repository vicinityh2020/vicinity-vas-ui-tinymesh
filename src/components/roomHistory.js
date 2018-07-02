import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, ListGroup, ListGroupItem, PageHeader, Row} from 'react-bootstrap';
import InfoPane from './panel'

class RoomHistory extends Component {
    static propTypes = {
        match: PropTypes.any.isRequired
    };


    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    datetime: new Date(),
                    visits: 45,
                    cleanedBy: 'John Doe',
                    threshold: 40,
                    comment: "Hehhee"
                },
                {
                    datetime: new Date(),
                    visits: 465,
                    cleanedBy: 'John Doe',
                    threshold: 40,
                    comment: "oO this one was filthy :)"
                },
                {
                    datetime: new Date(),
                    visits: 42,
                    cleanedBy: 'John Doe',
                    threshold: 40,
                    comment: null
                },
                {
                    datetime: new Date(),
                    visits: 41,
                    cleanedBy: 'John Doe',
                    threshold: 40,
                    comment: "Hehhee"
                }
            ]
        }
    }

    infoHeading(cleaningEvent){
        return  cleaningEvent.cleanedBy + " at "+ cleaningEvent.datetime.toLocaleDateString() + " " + cleaningEvent.datetime.toLocaleTimeString()
    }

    renderHistory() {
        let keyIndex = 0;
        let history = this.state.history;
        return history.map(value => {
            return (
                <Col xs={12} key={keyIndex++}>
                    <InfoPane
                        heading={this.infoHeading(value)}>
                        <ListGroup>
                            <ListGroupItem header={'Date'}>
                                {value.datetime.toString()}
                            </ListGroupItem>
                            <ListGroupItem header={'Number of visits before cleaning'}>
                                {value.visits}
                            </ListGroupItem>
                            <ListGroupItem header={'Cleaning done by'}>
                                {value.cleanedBy}
                            </ListGroupItem>
                            <ListGroupItem header={'Threshold'}>
                                {value.threshold}
                            </ListGroupItem>
                            <ListGroupItem header={'Comment'}>
                                {value.comment ? value.comment : "No comment"}
                            </ListGroupItem>
                        </ListGroup>
                    </InfoPane>
                </Col>
            )
        });
    }

    render() {

        return (
            <Row>
                <Col xs={12}>
                    <PageHeader>
                        History for Room {this.props.match.params.roomNumber}
                    </PageHeader>
                </Col>
                {this.renderHistory()}
            </Row>

        )
    }
}

export default RoomHistory;