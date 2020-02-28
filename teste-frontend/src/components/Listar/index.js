import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import "./styles.scss";


const Items = ({video}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <List className="list">
    <ListItem button onClick={handleClick} className="listItem">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="image"/>
        <ListItemText primary={video.snippet.title} className="title" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
        <ListItem button >
            <ListItemText primary={video.snippet.description} />
        </ListItem>
        </List>
    </Collapse>
    </List>
  );
}

const Lista = ({videos , SelectVideo}) => {
    const renderedVideos =  videos.map((video) => {
        return <Items key={video.id.videoId} video={video} SelectVideo={SelectVideo} />
    });

    return <div>{renderedVideos}</div>;
};
export default Lista;