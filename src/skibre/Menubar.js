import React from "react"
import {NavLink} from "react-router-dom"

function Menubar() {
    return (
        <div className="container menubar">

                <nav className="navbar fixed-bottom  container ">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink exact to="/" className="col topContent " name="HomePage">
                                <i className="fa fa-puzzle-piece"  href="/" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/friends" className="col topContent ">
                                <i className="fa fa-user-circle"  aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/contact" className="col topContent ">
                                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

        </div>
    );

}

export default Menubar