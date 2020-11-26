import React, {Fragment} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Col,
    Row,
    FormGroup,
    Label,
    Input,
    Button,
    Table,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
} from 'reactstrap';

import {Link} from "react-router-dom";

const Attributes = () => {
    return (
        <Fragment>
            <Card className="m-3">
                <CardHeader className="d-flex justify-content-between">
                    <h3>Attributes</h3>
                    {/*<Link className="btn btn-primary" to="/attributes/create">Create Attributes</Link>*/}

                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#exampleModalCenter">
                            Create Attribute
                        </button>
                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog"
                             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document" style={{width:"1200px"}}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">New Attribute</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                    {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Text Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup> */}

                                        <Col>
                                             <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label htmlFor="name">Name</Label>
                                                                <Input type="text" id="name" placeholder="Enter your name" required />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label htmlFor="ccnumber">Credit Card Number</Label>
                                                                <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label htmlFor="ccmonth">Month</Label>
                                                                <Input type="select" name="ccmonth" id="ccmonth">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label htmlFor="ccyear">Year</Label>
                                                                <Input type="select" name="ccyear" id="ccyear">
                                                                    <option>2017</option>
                                                                    <option>2018</option>
                                                                    <option>2019</option>
                                                                    <option>2020</option>
                                                                    <option>2021</option>
                                                                    <option>2022</option>
                                                                    <option>2023</option>
                                                                    <option>2024</option>
                                                                    <option>2025</option>
                                                                    <option>2026</option>
                                                                </Input>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label htmlFor="cvv">CVV/CVC</Label>
                                                                <Input type="text" id="cvv" placeholder="123" required />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                               
                                        </Col>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </CardHeader>
                <CardBody>
                    <Table className="table border table-hover">
                        <thead className="bg-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Attributes Name</th>
                            <th scope="col">Input Type</th>
                            <th scope="col">Unit Class</th>
                            <th scope="col" colSpan="">Child Attributes</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        <tr>
                            <th scope="row">1</th>
                            <td>Width</td>
                            <td><select value="Text">
                                <option>Number</option>
                                <option>Text</option>
                                <option>Range</option>
                                <option>Color</option>
                                <option>Size</option>
                            </select></td>
                            <td><select value="Select" disabled={false}>
                                <option>Data</option>
                                <option>Length</option>
                                <option>Area</option>
                                <option>Range</option>
                                <option>Space</option>
                                <option>Volume</option>
                            </select></td>
                            <td colSpan="">{null}</td>
                            <td>
                                <Button className="btn btn-warning">
                                    Edit
                                </Button> <Button className="btn btn-danger">
                                Delete
                            </Button>
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Fragment>
    );
}

export default Attributes;

