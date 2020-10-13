import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Samarth Asthana</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__Channel">

                </div>

            </div>
        </div>
    )
}

export default Sidebar
