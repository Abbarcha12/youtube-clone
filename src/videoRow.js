import React from "react"
import "./videoRow.css"
function Video({ views, subs, description, timestamp, Channel, title, image }) {
    return (
        <div className="videoRow" >
            <img className="videoRow_image" src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__heading">
                    {Channel} . <span className="videoRow__Subs">{subs}</span>  Subscribers {views} views .{timestamp}
                </p>
                <p className="videoRow__Des">{description}</p>
            </div>
        </div>
    )
}
export default Video;