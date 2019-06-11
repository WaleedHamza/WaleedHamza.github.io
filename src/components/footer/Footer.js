import React, {Component} from 'react'
// import { Button} from 'react-bootstrap';

import './Footer.css'

class Footer extends Component {
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
                <p className='copyRight'>Waleed Hamza &copy;2019 </p>
            </div>
        )
    }
}

const iconStyle = {
    color: '#ffffff'
}
export default Footer;
