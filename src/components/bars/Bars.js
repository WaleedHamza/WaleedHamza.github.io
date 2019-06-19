import React, { Component } from 'react';
import Bars from 'react-bars';

import './Bars.css';

class Bar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        skills: [
          {label:'HTML5', barHeight:30, verticalSpacing: 9, value:90, suffix:'90%', barColor:'#00adee'},
          {label:'Javascript', barHeight:30, verticalSpacing: 9, value:67 , suffix:'67%', barColor:'#229c8f'},
          {label:'JQuery', barHeight:30, verticalSpacing: 9, value:75 , suffix:'75%', barColor:'#00adee'},
          {label:'Node.js', barHeight:30, verticalSpacing: 9,  value:70 , suffix:'70%', barColor:'#229c8f'},
          {label:'MongoDB', barHeight:30, verticalSpacing: 9, value:70 , suffix:'70%', barColor:'#00adee'}
        ],
        skills2: [
          {label:'CSS', barHeight:30, verticalSpacing: 9, value:90, suffix:'90%', barColor:'#229c8f'},
          {label:'Bootstrap', barHeight:30, verticalSpacing: 9, value:90, suffix:'90%', barColor:'#00adee'},
          {label:'Materialize', barHeight:30, verticalSpacing: 9, value:90, suffix:'90%', barColor:'#229c8f'},
          {label:'Handlebars', barHeight:30, verticalSpacing: 9, value:67 , suffix:'67%', barColor:'#00adee'},
          {label:'React', barHeight:30, verticalSpacing: 9, value:65 , suffix:'65%', barColor:'#229c8f'}
        ]
      };
    }
  
    render() {
      return (
        <div className="bars">
        <div className="bars1">
          <Bars data={this.state.skills}/>
          </div>
          <div className="bars2">
          <Bars data={this.state.skills2}/>
          </div>
          </div>
      );
    }
  }


export default Bar;