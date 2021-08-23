import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./VedioCard.css"

function VedioCard({ image, title, channel, views, timestamp, channelImg }) {
    return (
        <div className="VedioCard">
            <img className="VedioCard__thumnail" src={image} alt=""></img>
            <div className="vedioCard_info">
                <Avatar className="Vedio__avatar" alt={title} src={channelImg} />

                <div className="Vedio__text" >
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>

    )
}
export default VedioCard;
