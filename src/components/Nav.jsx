import React, { Component } from 'react';
import{Link} from 'react-router-dom';
class Nav extends Component {

    render() { 
        const navstyle={
            color: 'white'
        }
        return (<div>
            <nav>
            <h3>LOGO</h3>
           <ul className="nav-links">
               <Link to='/appointment' style={navstyle}>
               <li>Book</li>
               </Link>
               <Link to='/view'style={navstyle}>
               <li>View</li>
               </Link>
               
           </ul>
            </nav>
            </div>  
            );
    }
}
 
export default Nav;