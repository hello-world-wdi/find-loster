import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component{
    render(){
        return (
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/lost">Help</Link>
                <br/>
                <Link to="/newLostInf">New Lost</Link>
            </div>
        )
    }
}

export default Nav;