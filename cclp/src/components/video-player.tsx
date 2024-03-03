import ReactPlayer from 'react-player'
import { useState } from 'react';

// interface LikeButtonProps{
//     button_liked: boolean;
// }
function LikeButton(){
    let icon = null
    let no_like = <img className="sidebarIcon" alt="profile pic" src="./searchImage.png"/>
    let like = <img className="sidebarIcon" alt="profile pic" src="./plusIcon.png"/>
    let [button_liked, setButtonLiked] = useState(false)
    function handleClick(){
        setButtonLiked(!button_liked)
    }
    icon = <div className = "LikeButton sidebarIcon" onClick= {handleClick}>{button_liked === true ? like :no_like }</div>
    // icon should only be part of what is returned. Size of icon needs to be changed or modified in overlay.
    return icon
}

function CommentSection(){
    let comments = <div className="videoComments">
        <div>
            <img alt="profile pic" resource="profilePic.png"/><p>Some text</p>
        </div>
        <div>
            <img alt="profile pic" resource="profilePic.png"/><p>Some more text</p>
        </div>
        <div>
            <img alt="profile pic" resource="profilePic.png"/><p>Some extra more text</p>
        </div>
        <div>
            <img alt="profile pic" resource="profilePic.png"/><p>TEXT</p>
        </div>

    </div>
    return comments
}

function CommentButton(){
    let [clicked, setClicked] = useState(false)
    let icon = <img className="sidebarIcon" alt="profile pic" src="./logo512.png"/>
    if (clicked === true){
        icon = <div>
            icon
            <CommentSection />
        </div>
    }
    return icon
}

function FollowButton(){
    let icon = <img className="sidebarIcon" alt="profile pic" src="./profilePic.png"/>
    return icon
}

function PlaylistButton(){
    let icon = <img className="sidebarIcon" alt="profile pic" src="./logo512.png"/>
    return icon
}

// interface SidebarProps{
//     button_liked: boolean;
// }
function VideoSidebar(){
    // this "overlay" contains the 4 buttons. Right now they are planned for the side of the videoSpace box.
    let res = <div className="videoSidebar">
        <FollowButton />
        <LikeButton />
        <CommentButton />
        <PlaylistButton />
    </div>
    return res
}

function VideoSpace(){
    // ratio of this area should be 9:16 for a portrait mode. A vertically held phone or video space.
    let space = <div className="videoPlayer">
            <ReactPlayer playing url='videos\pexels_videos_Street_at_night.mp4'
                    height = "100%"
                    width = "100%"
                    controls = {true}
                    loop = {true}
                />
        </div>
    return (space)
}
export default function VideoPlayer(){
    // need make a bigger box, wrap in div
    let res = <div id="video-wrapper">
        <VideoSpace />
        <VideoSidebar />
    </div>
    return res
}