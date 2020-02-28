import React, { useState } from "react";
import Pesquisar from '../components/Pesquisar';
import Listar from '../components/Listar';
import youtube from '../services/youtube';

export default () => {
  
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    async function handleSubmit (term) {
        const response = await youtube.get("search", {
          params: {
            part:'snippet',
            maxResults: 10,
            key: 'AIzaSyDdu3OaB_m--RiVza76T_IBLhdzUhaaAkc',
            q: term
          }
        });
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      }

    return (
        <>
          <Pesquisar onTerm={handleSubmit}/>
          <Listar SelectVideo={selectedVideo} videos={videos}/>
        </>
    )
};