import React from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";

const Login = () => {

    const submitLoginForm = (event) => {

    }

    return (
        <React.Fragment>
            <Container className="my-5">
                <h2 className="fw-normal mb-5">Login To React Auth Demo</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form onSubmit={submitLoginForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                                <input type={'text'} className="form-control" id={'login-username'} required />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} required />
                            </FormGroup>
                            <Button type="submit" className="btn-success mt-2">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Login;