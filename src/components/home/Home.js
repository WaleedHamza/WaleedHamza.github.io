import React, { useRef, useEffect }  from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap';
import Background from '../particles/Particles';
import './Home.css'
// import Image from '../../Assets/WaleedB&W.png'
// import { ReactComponent as Logo } from '../../Assets/mobile.svg';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';


const scrollToRef = (ref) => window.scrollTo(0, ref.ref)   
const useMountEffect = (fun) => useEffect(fun, [])


// class Home extends Component
const Home = () =>
 { 
    const myRef = useRef(null)

useMountEffect(() => scrollToRef(myRef)) // Scroll on mount

    
        return (
            <div>
            <div className='home'ref={myRef}>
                <div className='particles'><Background />
                </div>
                <div className='hero'>
                    <Jumbotron fluid className='jumbotron'>
                        <Container fluid className='container'>
                            <h4>Hello, I am</h4>
                            <h1 className='name'>WALEED HAMZA</h1>
                            <hr></hr>
                            <p className='text'>UX Designer / Frontend & Full Stack Developer</p>
                            <hr></hr>
                            <p >HTML | CSS | JavaScript | JQuery
                                <br/>
                                Node.js | Express | MongoDB | MYSQL | React.js
                                </p>
                                <Button bsPrefix='aboutBtn' ><a className='btnLink' href="/about"> About Me</a></Button>
                        </Container>
                    </Jumbotron>
                </div>

            </div>
            <About />
            <Portfolio/>
            <Contact/>

            <button className='scrollToTopBtn' onClick={()=>scrollToRef(myRef)}>
                    <i style={scrollBtn} className="fas fa-chevron-circle-up fa-3x"></i>
                </button>

</div>
        )
    }



const scrollBtn ={
    color: '#00adee',
  }

export default Home;