import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Lost</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a  className="nav-link"><Link to="/" className="nav-link js-scroll-trigger">Home</Link></a>
                            </li>
                            <li className="nav-item">
                            <a  className="nav-link"><Link to="/About" className="nav-link js-scroll-trigger">About</Link></a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link"><Link to="/Services" className="nav-link js-scroll-trigger">Services</Link></a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link"><Link to="/Contact" className="nav-link js-scroll-trigger">Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;