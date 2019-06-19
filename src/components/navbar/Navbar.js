import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll';
import PDF from '../../Assets/resume.pdf'
import './Navbar.css';

export default class Navbar extends Component {

    render() {
        const scrollToTop = () => {
            scroll.scrollToTop();
        }
        
        return (
            <div className='navbar'>
                <h1 >
                    <a href="/home" className='title'>
                        Waleed Hamza
                    </a>
                </h1>
                <Nav activeKey="/home">
                    <Nav.Item >
                        <Nav.Link className='navItem'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navItem' >Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navItem' >Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navItem' href={PDF}>Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
