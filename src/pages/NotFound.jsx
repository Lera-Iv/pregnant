import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return(
        <div className='secContainer' style={{'padding': '15rem'}}> 
            NOT FOUND PAGE! Go <Link to='/'>home</Link>
        </div>
    )
}

export default NotFound