import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Verified from "@material-ui/icons/CheckCircleOutlineOutlined"
import "./channel.css"

export default function ChannelRow({ image, Channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channel_Row">
            <Avatar className="channelRow__logo" src={image} alt={Channel} />
            <div className="channel__text">
                <h4>{Channel} {Verified && <Verified />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
