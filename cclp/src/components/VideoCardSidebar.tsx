import React from 'react';
import '../VideoComp.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Button } from '@mui/material';

interface VideoSideBarProps {
    avatarSrc: string;
    likes: number;
    comments: number;
}
const VideoCardSidebar: React.FC<VideoSideBarProps> = ({ avatarSrc, likes, comments }) => {
    return (
        <div>
            <div className='videoCardSidebar'>
                <div className='videoProfileNFollow'>
                    <h3><Avatar src={avatarSrc} /></h3>
                </div>
                <div className='videoCardActions'>

                </div>
                <FavoriteIcon fontSize='large'/>
                <MessageIcon  fontSize='large'/>
                <AddCircleOutlineIcon  fontSize='large'/>
            </div>
        </div>
    );
};

export default VideoCardSidebar;