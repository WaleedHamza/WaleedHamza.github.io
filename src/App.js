import React from 'react';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/portfolio'} component={Portfolio}/>
                    <Route path={'/contact'} component={Contact}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}



export default App;
