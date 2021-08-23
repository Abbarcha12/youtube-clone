import React from 'react'
import SidebarRow from "./SidebarRow.js"
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
// import WhatshotIcon from "@material-ui/icons/Whatshot";
// import HomeIcon from "@material-ui/icons/Home";
// import SubscriptionIcon from "@material-ui/icons/Subscriptions";
// import WhatshotIcon from "@material-ui/icons/Whatshot";
// import HomeIcon from "@material-ui/icons/Home";
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore";
import "./sidebar.css"
import { OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater, History, ExpandMoreOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="VideoLibrary" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="OndemandVideo" />
            <SidebarRow Icon={WatchLater} title="WatchLater" />
            <SidebarRow Icon={ThumbUpAltOutlined} title="ThumbUpAltOutlined" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
            <hr />
        </div>
    )
}
export default Sidebar;
