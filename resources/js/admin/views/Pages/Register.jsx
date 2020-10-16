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


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({})
    const [update, setUpdate] = useState(false);


    function inputHandler(e) {
        eval("set" + e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1))(e.target.value);
        let newError = error;
        newError[e.target.name] = "";
        setError(newError);
    }


    function registerer(e) {
        e.preventDefault();
        const err = {"name": "", "email": "", "password": "", "confirmPassword": ""};

        // Validation rules.
        name === "" ? err.name = "This field is required" : err.name = "";
        email === "" ? err.email = "This field is required" : err.email = "";
        password === "" ? err.password = "This field is required" : err.password = "";
        confirmPassword === "" ? err.confirmPassword = "This field is required" : err.confirmPassword = "";
        password !== confirmPassword ? (
            err.confirmPassword = "Password don't match",
                setConfirmPassword("")
        ) : null;
        setError(err);

        if (Object.keys(err).every((i) => err[i] === "")) {
            axios.post('/api/registration', {
                "name": name,
                "email": email,
                "password": password
            }).then((res) => {
                console.log(res.data);
            })
        }

    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form className="text-center" onSubmit={registerer}>
                                    <h1 className="text-info">Register</h1>
                                    <hr className="bg-info"/>
                                    <br/>
                                    <InputGroup className="">

                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-user"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            autoComplete="name"
                                            value={name}
                                            onChange={inputHandler}
                                        />
                                    </InputGroup>
                                    <p className="text-danger mb-2 text-left">&nbsp;<span>{error.name}</span>
                                    </p>
                                    <InputGroup className="">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your E-mail"
                                            autoComplete="email"
                                            value={email}
                                            onChange={inputHandler}
                                        />
                                    </InputGroup>
                                    <p className="text-danger mb-2 text-left">&nbsp;<span>{error.email}</span>
                                    </p>
                                    <InputGroup className="">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            autoComplete="password"
                                            value={password}
                                            onChange={inputHandler}
                                        />
                                    </InputGroup>
                                    <p className="text-danger mb-2 text-left">&nbsp;<span>{error.password}</span>
                                    </p>
                                    <InputGroup className="">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            autoComplete="password"
                                            value={confirmPassword}
                                            onChange={inputHandler}
                                        />
                                    </InputGroup>
                                    <p className="text-danger mb-4 text-left">&nbsp;
                                        <span>{error.confirmPassword}</span>
                                    </p>
                                    <Row>
                                        <Col xs="4">
                                            <Link to="/login" className="btn btn-warning w-100">
                                                Sign in
                                            </Link>
                                        </Col>
                                        <Col xs="8">
                                            <Button type="submit" color="info" block>Create Account</Button>
                                        </Col>
                                    </Row>

                                </Form>
                                <br/>
                                <p className="text-muted">Your can also register with</p>
                                <Row className="justify-content-around align-items-center">
                                    <Button className="btn-google-plus btn-brand"><i
                                        className="fa fa-google"/><span>Google</span></Button>
                                    <Button className="btn-facebook btn-brand"><i
                                        className="fa fa-facebook"/><span>Facebook</span></Button>
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
