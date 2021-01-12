import React from "react"
import ContactPageData from "./ContactPageData"


// tries to fetch data from given link but the cros origin issue is there becoz of server


// class ContactPage extends React.Component {
//
//     constructor(){
//         super()
//         this.state= {
//             todos: []
//         }
//     }
//     componentDidMount() {
//         // const proxyurl = "https://cors-anywhere.herokuapp.com/";
//         // const url = "https://assets.skibbre.com/media/contact.json";
//         fetch('https://assets.skibbre.com/media/contact.json')
//             .then(res => res.json())
//             .then((data) => {
//                 this.setState({ todos: data })
//                 console.log(this.state.todos)
//             })
//             .catch(console.log)
//     }
//
//     render() {
//         return(
//             <div></div>
//         )
//     }
// }

function ContactPage() {

    return(
        <div className="container">

            {/*header component*/}
            <div className="container">
                <div className="header-left page-title">
                    Contact
                </div>
                <div className="header-right ">
                    <img className="user-image" src="https://picsum.photos/id/120/100/100"/>

                </div>
            </div>
            <br />

            {/*main contact page content*/}
            {ContactPageData.map((data1)=>
            {
                return(
                    <div className="container">
                        <div className="page-content">
                            {data1.data}
                        </div>
                    </div>
                )


            })}
        </div>
    )

}


export default ContactPage