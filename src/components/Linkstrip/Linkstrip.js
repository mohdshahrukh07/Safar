import React from 'react'
import { Link } from 'react-router-dom'
import './Linkstrip.css'
function Linkstrip(props) {
    return (
        <div>
            <div className="strip">
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" alt="" />

                <div className="Linkitem">
                    <h1>{props.Pagename}</h1>
                    <div className="homelink"><Link to='/home'>Home</Link>
                        &#x25BA;<span>{props.ComponentName}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Linkstrip
