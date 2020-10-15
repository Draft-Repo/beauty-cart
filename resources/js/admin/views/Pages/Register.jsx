import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';


function registerer() {
    alert('o');
}


const Register = () => {

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form className="text-center">
                                    <h1>Register</h1>
                                    <hr className="bg-info"/>
                                    <br/>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-user"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            placeholder="Write your name here"
                                            autoComplete="name"
                                            value={newName}
                                            onChange={(e) => {
                                                setNewName(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            placeholder="Write your e-mail here"
                                            autoComplete="email"
                                            value={newEmail}
                                            onChange={(e) => {
                                                setNewEmail(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            value={newPassword}
                                            onChange={(e) => {
                                                setNewPassword(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Repeat password"
                                               autoComplete="new-password"
                                               value={confirmPassword}
                                               onChange={(e) => {
                                                   setConfirmPassword(e.target.value)
                                               }}
                                        />
                                    </InputGroup>
                                    <Row>
                                        <Col xs="4">
                                            <Link to="/login">
                                                <Button color="warning" block>Sign in</Button>
                                            </Link>
                                        </Col>
                                        <Col xs="8">
                                            <Button color="info" block onClick={registerer}>Create Account</Button>
                                        </Col>
                                    </Row>

                                </Form>
                                <br/>
                                <p className="text-muted">Your can also register with</p>
                                <Row className="justify-content-around align-items-center">
                                    <Col xs="4">
                                        <Button className="btn-google-plus btn-brand"><i
                                            className="fa fa-google"/><span>Google&nbsp;</span></Button>
                                    </Col>
                                    <Col xs="4">
                                        <Button className="btn-facebook btn-brand"><i
                                            className="fa fa-facebook"/><span>Facebook</span></Button>
                                    </Col>
                                    <Col xs="4">
                                        <Button className="btn-twitter btn-brand"><i
                                            className="fa fa-twitter"/><span>Twitter&nbsp;</span></Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
