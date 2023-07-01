import React, {Component} from "react";
import './Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <ul>
                <li>אודות</li>
                <li>איך אני יכול לתרום למטרה?</li>
                <li>המטרה שלנו</li>
            </ul>
        );
    }
}
 
export default Navbar;