import React, {Component} from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap';
import Background from '../particles/Particles';
import './Home.css'
// import Image from '../../Assets/WaleedB&W.png'
// import { ReactComponent as Logo } from '../../Assets/mobile.svg';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
export default class Home extends Component {

    render() {
        return (
            <div>
            <div className='home'>
                <div className='particles'><Background />
                </div>
                <div className='hero'>
                    <Jumbotron fluid className='jumbotron'>
                        <Container fluid className='container'>
                            <h4>Hello, I am</h4>
                            <h1 className='title'>WALEED HAMZA</h1>
                            <hr></hr>
                            <p className='text'>UX Designer / Frontend & Full Stack Developer</p>
                            <hr></hr>
                            {/* <p className="lead ml2">HTML | CSS | JavaScript | JQuery
                                <br/>
                                Node.js | Express | MongoDB | MYSQL | React.js
                                </p> */}
                                <Button bsPrefix='aboutBtn' ><a className='btnLink' href="/about"> About Me</a></Button>
                        </Container>
                    </Jumbotron>
                    {/* <Logo/> */}
                    {/* <img className='photo' src={Image} alt={'Waleed'}></img> */}

                </div>

            </div>
            <About />
            <Portfolio/>

</div>
        )
    }
}
