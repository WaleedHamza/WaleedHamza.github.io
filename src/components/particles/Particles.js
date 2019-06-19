import React, {Component} from "react";
import Particles from 'react-particles-js';
 
class Background extends Component{ 
    render(){
        return (
            <Particles 
              params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": false,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 50,
                            "duration": 15,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 4
                        }
                    }
                }
            	}}
            />
        );
    };
 
}

export default Background;