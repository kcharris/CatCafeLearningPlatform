import ReactPlayer from 'react-player'

function SaveToPlaylistButton(){
    return <b/>
}

function LikeButton(button_liked: boolean){
    let icon = null
    let no_like = <span role="img" aria-label="sheep">🐱</span>
    let like = <span role="img" aria-label="sheep">😸</span>
    if (button_liked){ icon = like }
    else{ icon = no_like}

    // icon should only be part of what is returned. Size of icon needs to be changed or modified in overlay.
    return icon
}

function CommentButton(){
    return <b/>
}

function FollowButton(){
    return <b/>
}

function Overlay(){
    // this "overlay" contains the 4 buttons. Right now they are planned for the side of the videoSpace box.
    return <b/>
}

function VideoSpace(){
    // ratio of this area should be 9:16 for a portrait mode. A vertically held phone or video space.
    let space = <div className="videoPlayer">
            <ReactPlayer playing url='videos\pexels_videos_Street_at_night.mp4'
                    controls = {true}
                    loop = {true}
                />
        </div>
    return (space)
}
export default function VideoPlayer(){
    
    return (<VideoSpace />)
}