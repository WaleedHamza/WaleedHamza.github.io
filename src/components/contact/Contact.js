import React, {Component} from 'react';
// import { ReactComponent as Email } from '../../Assets/send.svg';
import { Button} from 'react-bootstrap';

import './Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-content">
                    <h1 className='contactTitle'>Contact Me</h1>
                    <div className="formDiv">

                        <form method="POST" action="https://formspree.io/hamzah.waleed@gmail.com">
                            <div className='userInfo'>
                                <div className='name_phone'>
                                    <input className='nameInput' type="text" name="Name" placeholder="Your Name"/>
                                    <input className='phoneInput' type="phoneNumber" name="phoneNumber" placeholder="Phone Number"/>
                                </div>
                                <div className='email'>
                                    <input
                                        className="emailInput"
                                        type="email"
                                        name="email"
                                        placeholder="Your email"/></div>
                            </div>
                            <div className='message'>
                                <textarea className="textInput" name="message" placeholder="Your message"></textarea>
                            </div>
                            <p>Preferred call back time & data
                            </p>
                            <div className='date_time'>

                                <input type="time" name="time"/>
                                <input type="date" name="date"/>
                            </div>
                            <br/>
                            <Button  variant="light" type="submit" value="Send" bsPrefix='sendbtn'>Send
                            </Button>
                        </form>
                    </div>
                  
                </div>
            </div>
        );
    }
}
