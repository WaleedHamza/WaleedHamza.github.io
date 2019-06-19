import React, {Component} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import Slide from 'react-reveal/Slide';
import './Footer.css'

class Footer extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }


    render() {
        return (
            <div className='footer'>

                <div className='links'>
                    <div className='linkItem'>
                        <a href='https://github.com/WaleedHamza'>
                            <i style={iconStyle} className="fab fa-github-square fa-3x"></i>
                        </a>
                    </div>
                    <div className='linkItem'>
                        <a href='https://www.linkedin.com/in/waleedhamza/'>
                            <i style={iconStyle} className="fab fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                </div>
                <Slide right>
                    <button className='scrollToTopBtn' onClick={this.scrollToTop}>

                        <i style={scrollBtn} className="fas fa-chevron-circle-up fa-3x"></i>
                    </button>
                </Slide>
<div className='rights'> <p className='copyRight'>Waleed Hamza</p><p style={scrollBtn}>&copy;2019</p></div>
               
            </div>
        )
    }
}

const iconStyle = {
    color: '#ffffff'
}

const scrollBtn = {
    color: '#00adee'
}
export default Footer;
