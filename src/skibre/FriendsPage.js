import React, {useState} from "react"
import FriendData from "./FriendsPageData.json"
import "./Skibre.css"

function FriendsPage(){

        const [searchTerm, setSearchTerm] = useState("");
        return(
            <div className="container">

                {/*header component*/}
                <div className="container">
                    <div className="header-left page-title">
                        Friends
                    </div>
                    <div className="header-right ">
                        <img className="user-image" src="https://picsum.photos/id/120/100/100"/>

                    </div>
                </div>

                <br/>

                {/*SearchBar*/}
                <div>
                    <input
                        type="text"
                        placeholder="&#128269; Search"
                        onChange={event => {setSearchTerm(event.target.value)}}
                        className="search-bar"
                    />
                </div>
                {/*End of SearchBar*/}

                <div className="row">
                    <div className="col  friends">
                        <i className="fa fa-user-circle" aria-hidden="true" style={{fontSize:'23px'}}></i>       Friends
                    </div>
                    <div className="col recent">
                        <i className="fa fa-circle" aria-hidden="true" style={{ color: '#51da27',fontSize: '15px', verticalAlign:"middle" }}></i>        Recent
                    </div>
                </div>

                {/*Data Table*/}
                <table className="">
                    <tbody>
                    {FriendData.filter((val)=>{
                            if (searchTerm === ""){
                                return val
                            }
                            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).map((friendDetail) => {
                        return <tr >
                            <td className="td1"><img className="img" src={friendDetail.picture} /></td>
                            <td className="td2">{friendDetail.name}</td>
                            <td className="td3"><img src ={friendDetail.country_code} /></td>
                        </tr>
                    })}
                    </tbody>
                </table>

            </div>
        )



}

export default FriendsPage