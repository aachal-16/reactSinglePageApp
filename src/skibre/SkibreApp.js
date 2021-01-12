import React from "react"
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import FriendsPage from "./FriendsPage.js";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import Menubar from "./Menubar";
import ErrorPage from "./ErrorPage";


class SkibreApp extends React.Component{
    render() {
        return(

                <div>
                    <h1>
                        <Router>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/contact"  component={ContactPage} />
                                <Route path="/friends"  component={FriendsPage} />
                                <Route component={ErrorPage}/>
                            </Switch>

                            <div>
                                <Menubar/>
                            </div>
                        </Router>
                    </h1>

                </div>
        )
    }

}

export default SkibreApp