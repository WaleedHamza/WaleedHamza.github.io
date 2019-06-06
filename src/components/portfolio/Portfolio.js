import React, {Component} from 'react'
import {CardDeck, Card, Button} from 'react-bootstrap';
import Projects from './projects.json';
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <CardDeck bsPrefix='deck'>
                    {Projects.map((item, index) => {
                        return (
                  <Card className='card' key={item.id}>
                  <Card.Img variant="top" src={require(`${item.img}`)} alt={item.name}></Card.Img>
                  <Card.Body className='cardBody'>
                  <Card.Title bsPrefix='cardTitle'>{item.name}</Card.Title>
                  <Button className='cardBtn' variant="link"><a href={item.link}>Learn More</a></Button>
                  </Card.Body>
                  </Card>
                        )
                    })}
                </CardDeck>
            </div>
        )
    }
}
