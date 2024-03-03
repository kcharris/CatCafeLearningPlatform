import ReactPlayer from 'react-player'
import { useState } from 'react';

// interface LikeButtonProps{
//     button_liked: boolean;
// }
function LikeButton(){
    let icon = null
    let no_like = <span role="img" aria-label="sheep">🐱</span>
    let like = <span role="img" aria-label="sheep">😸</span>
    let [button_liked, setButtonLiked] = useState(false)
    function handleClick(){
        setButtonLiked(!button_liked)
    }
    icon = <div className = "LikeButton" onClick= {handleClick}>{button_liked === true ? like :no_like }</div>
    // icon should only be part of what is returned. Size of icon needs to be changed or modified in overlay.
    return icon
}

function CommentButton(){
    return <div>comment</div>
}

function FollowButton(){
    return <div>follow</div>
}

function PlaylistButton(){
    return <div>playlist</div>
}

// interface SidebarProps{
//     button_liked: boolean;
// }
function VideoSidebar(){
    // this "overlay" contains the 4 buttons. Right now they are planned for the side of the videoSpace box.
    let res = <div>
        <PlaylistButton />
        <LikeButton />
        <CommentButton />
        <FollowButton />
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