import React from "react"
import "./SidebarRow.css"


function SidebarRow({ Selected, Icon, title }) {
    return (
        <div className={`SidebarRow ${Selected && "Selected"}`}>
            <Icon className="SidebarRow__icon " />
            <h2 className="SidebarRow__title">{title}</h2>
        </div >
    )
}
export default SidebarRow;


