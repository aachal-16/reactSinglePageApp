import React from "react"

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            data:"Home page content fetched from JSON"
        }
    }
    render() {
        return(

            <div className="container">

                <div className="container">
                    <div className="header-left page-title">
                        Home
                    </div>
                    <div className="header-right ">
                        <img className="user-image" src="https://picsum.photos/id/120/100/100"/>

                    </div>
                </div>

                <br/>

                {/*get data using state. On ContactPage and FriendsPage data is fetched from json file*/}

                {/*main contact page content*/}
                <div className="page-content">
                    {this.state.data}
                </div>

            </div>
        )
    }
}

export default HomePage