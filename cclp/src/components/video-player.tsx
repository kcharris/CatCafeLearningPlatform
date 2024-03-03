import ReactPlayer from 'react-player'

interface LikeButtonProps{
    button_liked: boolean;
}
function LikeButton({button_liked}: LikeButtonProps){
    let icon = null
    let no_like = <span role="img" aria-label="sheep">🐱</span>
    let like = <span role="img" aria-label="sheep">😸</span>
    if (button_liked){ icon = like }
    else{ icon = no_like}

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
function Sidebar({button_liked}: LikeButtonProps){
    // this "overlay" contains the 4 buttons. Right now they are planned for the side of the videoSpace box.
    let res = <div>
        <PlaylistButton />
        <LikeButton button_liked= {button_liked}/>
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
    let button_liked = false;
    let res = <div id="video-wrapper">
        <VideoSpace />
        <Sidebar button_liked= {button_liked} />
    </div>
    return res
}