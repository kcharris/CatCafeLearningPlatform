import videoPlayer from './video-player';
import upload from './upload';
import searchSection from './search-section';
import FollowingComponent from './FollowingComponent';
import PlayListComponent from './PlayListComponent';
import ProfileComponent from './ProfileComponent';

import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const SideBarData = [
    {
        title: "Home",
        icon : <HomeIcon />,
        cmpnt: videoPlayer
    },
    {
        title: "Following",
        icon : <PersonAddAltIcon />,
        cmpnt: FollowingComponent
    },
    {
        title: "Playlist",
        icon : <PlaylistAddIcon />,
        cmpnt: PlayListComponent
    },
    {
        title: "Explore",
        icon : <ExploreIcon />,
        cmpnt: searchSection
    },
    {
        title: "Profile",
        icon : <AccountCircleIcon />,
        cmpnt: ProfileComponent
    },
    {
        title: "Upload Video",
        icon : <CloudUploadIcon />,
        cmpnt: upload
    }
]