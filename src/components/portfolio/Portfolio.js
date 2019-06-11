import React, {Component} from 'react'
import {CardDeck, Card, Button} from 'react-bootstrap';
// import {Animated} from "react-animated-css";
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';
import Projects from './projects.json';
import './Portfolio.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

    render() {
        return (
            <div className='portfolio'>
                <Reveal effect="fadeInUp">
                <h1 className='portfolioTitle'>Portfolio</h1></Reveal>
                <CardDeck bsPrefix='deck'>
                    {Projects.map((item, index) => {
                        return (
                            <Slide bottom>
                                <Card className='card' key={item.id}>
                                    <Card.Img variant="top" src={require(`${item.img}`)} alt={item.name} 
                                      onMouseEnter={this.handleMouseHover}
                                    onMouseLeave={this.handleMouseHover}></Card.Img>
                                    {this.state.isHovering && <div className='overlay'>
                                <Card.Body className='cardBody'>
                                    <Card.Title bsPrefix='cardTitle'>{item.name}</Card.Title>
                                    <Button className='cardBtn' variant="link">
                                        <a href={item.link}>Learn More</a>
                                    </Button>
                                </Card.Body></div>}
                                </Card>
                                </Slide>
                        )
                    })}
                </CardDeck>
            </div>
        )
    }
}


export default Portfolio;