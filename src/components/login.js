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
            <Col sm={6} smOffset={3}>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" href={"/overview"}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

export default Login;
