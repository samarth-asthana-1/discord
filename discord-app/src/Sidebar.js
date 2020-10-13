import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel.js";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Samarth Asthana</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channel</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>
            <div className="sidebar__channelList">
                <SidebarChannel />
            </div>
        </div>
    )
}
export default Sidebar
