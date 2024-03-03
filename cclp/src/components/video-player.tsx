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
    return icon
}

function CommentSection(){
    let comments = <div className="videoComments">
        <div>
            <img className="commentPic" alt="profile pic" src="profilePic.png"/><p>Some text</p>
        </div>
        <div>
            <img className="commentPic" alt="profile pic" src="profilePic.png"/><p>Some more text</p>
        </div>
        <div>
            <img className="commentPic" alt="profile pic" src="profilePic.png"/><p>Some extra more text</p>
        </div>
        <div>
            <img className="commentPic" alt="profile pic" src="profilePic.png"/><p>TEXT</p>
        </div>

    </div>
    return comments
}

function CommentButton({commentsActive, setComments}: {commentsActive:any, setComments:any}){
    let [clicked, setClicked] = useState(false)
    let icon = <img className="sidebarIcon" onClick={() => setComments(!commentsActive)} alt="profile pic" src="./logo512.png"/>
    
    return icon
}

function FollowButton(){
    let icon = <img className="sidebarIcon" alt="profile pic" src="./profilePic.png"/>
    return icon
}

function PlaylistButton({playlistActive, setPlaylist}: {playlistActive:any, setPlaylist:any}){
    let icon = <img className="sidebarIcon" alt="profile pic" src="./logo512.png"/>
    return icon
}

// interface SidebarProps{
//     button_liked: boolean;
// }
function VideoSidebar({commentsActive, playlistActive, setComments, setPlaylist}: {commentsActive:any, setComments:any, playlistActive:any, setPlaylist:any}){
    let res = <div className="videoSidebar">
        <FollowButton />
        <LikeButton />
        <CommentButton commentsActive={commentsActive} setComments= {setComments}/>
        <PlaylistButton playlistActive={playlistActive} setPlaylist={setPlaylist}/>
    </div>
    return res
}

function VideoSpace(){
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
interface videoProps{

}
export default function VideoPlayer(){
    let [commentsActive, setComments] = useState(false);
    let [playlistActive, setPlaylist] = useState(false);
    let commentSection = commentsActive === true ? <CommentSection/> : <div></div>
    // let playlistSection = playlistActive === true ? <PlaylistSection/> : <div></div>
    let res = <div id="video-wrapper">
        <VideoSpace />
        <VideoSidebar commentsActive= {commentsActive} playlistActive = {playlistActive} setComments={setComments} setPlaylist= {setPlaylist}/>
        {commentSection}
        {/* {playlistSection} */}
    </div>

    return res
}