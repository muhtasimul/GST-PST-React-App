import React from "react";
import {Link} from "react-router-dom"
import {Nav, Tab, Tabs} from 'react-bootstrap'
import Federal from "./federal/Federal"
import Total from "./total/Total"
function Header(){
    return(
        <div>

            <Nav>
                <Nav.Item>
                    <Link className="nav-link" to="/total">Total</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/federal">Federal</Link>
                </Nav.Item>
                
            </Nav> 
            
        </div>
    )
}

export default Header