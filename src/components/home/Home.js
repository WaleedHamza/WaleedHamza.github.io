import React, {Component} from 'react';
import {Jumbotron, Container, Button, Navbar, Nav} from 'react-bootstrap';
import Background from '../particles/Particles';
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './Home.css';
import './Navbar.css';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

class Home extends Component {

    constructor(...args) {
        super(...args);
    
        this.attachRef = target => this.setState({ target });
        this.state = {
          show: true,
        };
      }
    
   

    render(){    
        // eslint-disable-next-line
        const scrollToTop = () => { 
            scroll.scrollToTop();
        }
   
        return (
            <div>
                <Link
                    activeClass='active'
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}>
                    <div className='home'>
                        <div className='particles'><Background/>
                        </div>

                        <div className='hero'>
                            <Jumbotron fluid className='jumbotron'>
                                <Container fluid className='container'>
                                    
                                    <h4>Hello, I am</h4>
                                   <Fade  delay={500}> <h1  className='name' >WALEED HAMZA</h1></Fade>
                                   <Fade delay={700}>
                                   <p >I have always had a passion for languages because of its power 
                                       to connect people, which is why I became a translator for the military. 
                                       My love of languages has expanded into programming. 
                                       Now, I’m a solution focused web developer creating connections in code 
                                       to tackle challenging issues and provide innovative solutions.</p>
                                   </Fade>
                                   <Fade  delay={900}>  <p className='text'>FULL STACK DEVELOPER</p></Fade>
                                   <Fade  delay={1100}> <p >HTML | CSS | JavaScript | JQuery 
                                        <br/>
                                        Node.js | Express | MongoDB | MYSQL | React.js
                                    </p></Fade>{// eslint-disable-next-line
                                    }
                                    <Fade delay={3000}> 
                                    {// eslint-disable-next-line
                                    }
                                    <Link
                                        activeClass='active'
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                            {// eslint-disable-next-line
                                    }
                                        <Button bsPrefix='aboutBtn'>More</Button>
                                    </Link></Fade>
                                    
                                </Container>
                            </Jumbotron>
                        </div>
                    </div>
                </Link>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' bsPrefix='navbar'>
                <Link 
                                        activeClass='active'
                                        to='home'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}><Navbar.Brand href="#home" ><h3 className='brand'>Waleed Hamza</h3></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto brand">
                  <Link
                                        activeClass='active'
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}><Nav.Link>Skills</Nav.Link></Link>
                    <Link
                                        activeClass='active'
                                        to='portfolio'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}><Nav.Link>Portfolio</Nav.Link></Link>
                   <Link
                                        activeClass='active'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}> <Nav.Link>Contact</Nav.Link>
                                        </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                <About activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}></About>
                <Portfolio/>
                <Contact/>

            </div>
        )
    }
}

export default Home;