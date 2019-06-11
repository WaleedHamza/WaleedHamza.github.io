import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
// import Overlay from 'react-bootstrap/Overlay'
import PDF from '../../Assets/resume.pdf'
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <h1 ><a href="/home" className='title'> W </a></h1>
                <Nav activeKey="/home">
                    <Nav.Item >
                        <Nav.Link className= 'navItem' href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className= 'navItem' href="/portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className= 'navItem' href="/contact">Contact
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className= 'navItem'href={PDF} >Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
