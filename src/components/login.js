import React, {Component} from 'react';
import {ControlLabel, Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Checkbox} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <Col xs={12}>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} xs={2}>
                            Email
                        </Col>
                        <Col xs={12}>
                            <FormControl type="email" placeholder="Email"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} xs={2}>
                            Password
                        </Col>
                        <Col xs={12}>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col xs={3}>
                            <Button type="submit" href={"/overview"}>Sign in</Button>
                        </Col>
                        <Col xs={6}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

export default Login;
