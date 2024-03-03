import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function SearchMainList(){
    let res = <div className = "searchMainList">
        <ListItem>
            <ListItemText primary="Math"/>
      </ListItem>
      <Divider/>
      <ListItem>
            <ListItemText primary="Science"/>
      </ListItem>
      <Divider/>
      <ListItem>
            <ListItemText primary="Biology"/>
      </ListItem>
      <Divider/>
      <ListItem>
            <ListItemText primary="History"/>
      </ListItem>
      <Divider/>
      <ListItem>
            <ListItemText primary="Phisics"/>
      </ListItem>
      <Divider/>
      <ListItem>
            <ListItemText primary="Ecology"/>
      </ListItem>
    </div>
    return res
}

export default function SearchSection(){
    let res = <div className = "searchSectionWrapper">
        <SearchMainList/>
    </div>
    return res
}