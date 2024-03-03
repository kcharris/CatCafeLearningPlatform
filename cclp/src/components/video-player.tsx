function saveToPlaylistButton(){
    return <b/>
}

function likeButton(button_liked: boolean){
    let icon = null
    let no_like = <span role="img" aria-label="sheep">🐱</span>
    let like = <span role="img" aria-label="sheep">😸</span>
    if (button_liked){ icon = like }
    else{ icon = no_like}

    // icon should only be part of what is returned. Size of icon needs to be changed or modified in overlay.
    return icon
}

function commentButton(){
    return <b/>
}

function followButton(){
    return <b/>
}

function overlay(){
    return <b/>
}
export default function videoPlayer(){
    return <a></a>
}