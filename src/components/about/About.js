import React, {Component} from 'react';
import Bar from '../bars/Bars.js';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Fast from './assets/fast.svg';
import Responsive from './assets/responsive.svg'
import Scale from './assets/scale.svg'
import Intuitive from './assets/intuitive.svg'
import './About.css'
class About extends Component {

    render() {
        return (
            <div>
                <div className='about'>
                    <Fade delay={100}>
                        <h1 className='aboutTitle'>Skills</h1>
                    </Fade>
                    <div className='skillsDiv'>
                        <ul className='skills'>
                            <li>
                                <Flip top delay={500}>
                                    <div className='icon'>
                                        <img src={Fast} alt='Fast'></img>
                                        <h3>Fast</h3>
                                    </div>
                                </Flip>
                            </li>
                            <li>
                                <Flip top delay={1000}>
                                    <div className='icon'>
                                        <img src={Scale} alt='Scaleable'></img>
                                        <h3>Scaleable</h3>
                                    </div>
                                </Flip>
                            </li>
                            <li>
                                <Flip top delay={1500}>
                                    <div className='icon'>
                                        <img src={Responsive} alt='Rsponsive'></img>
                                        <h3>Responsive</h3>
                                    </div>
                                </Flip>
                            </li>
                            <li>
                                <Flip top delay={2000}>
                                <div className='icon'>
                                    <img src={Intuitive} alt='Intuitive'></img>
                                    <h3>Intuitive</h3>
                                    </div>
                                </Flip>
                            </li>
                        </ul>
                    </div>
                    <div className='bars'>
                        <Slide left>
                                <Bar/>
                            </Slide>
                        </div>
                        </div>
                        
                    </div>
        )
    }
}

export default About;