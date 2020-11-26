import React, { Component } from 'react';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import CalculatorApp from './../../../calculator/components/CalculatorApp';
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />



        <Nav className="d-md-down-none" navbar>
          <button className="btn btn">Click me</button>
        </Nav>
        <Nav className="ml-auto" navbar>


          <div className=" ">
            <Modal isOpen={this.state.modal} className={'modal-md'}>
              <ModalHeader>
                Calculator
              </ModalHeader>
              <ModalBody>
                <CalculatorApp />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={this.toggle}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>



          <button className="btn btn-danger btn-sm" onClick={this.toggle}><i className="fa fa-calculator"/></button>
          <span className="px-1" />
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <button className="btn btn-warning btn-sm">Option</button>
              <span className="px-1" />
            </DropdownToggle>
            <DropdownMenu right className="my-3">
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"/> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"/> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"/> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"/> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-user"/> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"/> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"/> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"/> Projects<Badge color="primary">42</Badge></DropdownItem>

              <DropdownItem><i className="fa fa-shield"/> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"/> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
