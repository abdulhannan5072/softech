import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import Aux from "../../../../hoc/_Aux";

class ChildNav extends Component{

    render(){
        const navItems = this.props.navI.items.map(item => {
            return (
                <Nav.Item>
                    <NavLink className="p-2 d-inline text-dark" to={item.url} >{item.title}</NavLink>
                </Nav.Item>
            );
        });
        return(
            <Aux>
                <Navbar bg="light" variant="light" expand="lg">
                    <Nav variant="tabs" defaultActiveKey="/project/changePhase"  className='mr-auto' >
                        
                        {navItems}
                        
                    </Nav>
                </Navbar>
            </Aux>
        );
    };

}
export default ChildNav;