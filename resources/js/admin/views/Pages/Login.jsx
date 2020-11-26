import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import Cookies from 'js-cookie';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    function inputHandler(e) {
        eval("set" + e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1))(e.target.value);
        let newError = error;
        newError[e.target.name] = "";
        setError(newError);
    }

    function login(e) {
        e.preventDefault();
        let err = {"email": "", "password": ""};

        // Validation rules.
        email === "" ? err.email = "This field is required" : err.email = "";
        password === "" ? err.password = "This field is required" : err.password = "";
        setError(err);

        if (Object.keys(err).every((i) => err[i] === "")) {

            axios.post('/api/login', {
                "email": email,
                "password": password
            }).then((res) => {
                if (res.data.error == null) {
                    Cookies.set('token', res.data.token);
                } else {
                    setError(res.data.error);
                }
            })
        }
    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                        <Card className="mx-4 bg-primary">
                            <CardBody className="p-4">
                                    <Form onSubmit={login}>
                                        <Row>
                                            <Col xs="8">
                                                <h1 className="text-white">Login</h1>
                                            </Col>
                                            <Col xs="4">
                                                <Link to="/register" className="btn btn-light w-100">
                                                    Create Account
                                                </Link>
                                            </Col>
                                        </Row>

                                        <hr className="bg-white"/>
                                        <br/>
                                        <InputGroup className="">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"/>
                                                </InputGroupText>
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
                                        <p className="text-danger mb-2 text-left">&nbsp;<span>{error.email}</span></p>
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
                                        <Row>
                                            <Col xs="8">
                                                <Link to="/login" className="text-warning w-100 text-decoration-none">
                                                    Forget password
                                                </Link>
                                            </Col>
                                            <Col xs="4">
                                                <Button type="submit" color="dark" block>Sign in</Button>
                                            </Col>

                                        </Row>
                                    </Form>
                                    <br/>
                                    <p className="text-light">Your can also register with</p>
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

export default Login;
