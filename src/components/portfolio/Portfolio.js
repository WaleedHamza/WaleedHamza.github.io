import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';
import Projects from './projects.json';
import './Portfolio.css';

const Portfolio = ()=> {
    

        return (
            <div className='portfolio'>
                <Reveal effect="fadeInUp">
                    <h1 className='portfolioTitle'>Portfolio</h1>
                </Reveal>
                <CardDeck bsPrefix='deck'>
                    { Projects.map( item => {
                        return (
                            <Slide bottom key={item.id}>
                                <Card className='card' key={item.name}>
                                    <a className="btnLink" href={item.link}>
                                        <Card.Img
                                            className="cardImg"
                                            variant="top"
                                            src={require(`${item.img}`)}
                                            alt={item.name}></Card.Img>
                                    </a>
                                </Card>
                            </Slide>
                        )
                    })}
                </CardDeck>
            </div>
        )
 
       
    
        
    }

export default Portfolio;