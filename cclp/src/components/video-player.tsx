import ReactPlayer from 'react-player'
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup'

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

function CommentButton({currState, setCurrState}:{currState:any, setCurrState:any}){
    let icon = <img className="sidebarIcon" onClick={() => setCurrState(currState !== 1 ? 1 : 0)} alt="profile pic" src="./logo512.png"/>

    return icon
}

function FollowButton(){
    let icon = <img className="sidebarIcon" alt="profile pic" src="./profilePic.png"/>
    return icon
}

function PlaylistButton({currState, setCurrState}:{currState:any, setCurrState:any}){
    let icon = <img className="sidebarIcon" onClick={() => setCurrState(currState !== 2 ? 2 : 0)} alt="profile pic" src="./logo512.png"/>
    return icon
}
function PlaylistSection(){
    let playlist = <div className="videoPlaylist">
        <p>Add to playlist</p>
        <FormGroup>
            <FormControlLabel control= {<Checkbox/>} label="Math"/>
            <FormControlLabel control= {<Checkbox/>} label="Science"/>
            <FormControlLabel control= {<Checkbox/>} label="Biology"/>
            <FormControlLabel control= {<Checkbox/>} label="History"/>
        </FormGroup>

    </div>
    return playlist
}

// interface SidebarProps{
//     button_liked: boolean;
// }
function VideoSidebar({currState, setCurrState}:{currState:any, setCurrState:any}){
    let res = <div className="videoSidebar">
        <FollowButton />
        <LikeButton />
        <CommentButton currState={currState} setCurrState={setCurrState}/>
        <PlaylistButton currState={currState} setCurrState={setCurrState}/>
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
    let states = [<div></div>, <CommentSection/>, <PlaylistSection/>]
    let [currState, setCurrState] = useState(0);
    // There is a bug here where commentSection and PlaylistSection may be active at the some time, but I only want the most recent one pressed to be active.
    let res = <div id="video-wrapper">
        <VideoSpace />
        <VideoSidebar currState={currState} setCurrState={setCurrState}/>
        {states[currState]}
    </div>

    return res
}