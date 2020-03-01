import React, { useState } from "react";
import Pesquisar from '../components/Pesquisar';
import Listar from '../components/Listar';
import Navegacao from '../components/Navegacao'
import youtube from '../services/youtube';

export default () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [pageInfo, setPageInfo] = useState("CAUQAA");
    const [nextPageToken, setnextPageToken] = useState("");
    const [prevPageToken, setprevPageToken] = useState("");
    const [termBusca, setTermBusca] = useState("");

    async function handleSubmit (term) {
        const response = await youtube.get("search", {
          params: {
            part:'snippet',
            maxResults: 5,
            pageToken: pageInfo,
            // key: 'AIzaSyDqB66f3MzBt6Z0A1rMXhmI1ciWEOMs0Tw',
            key: 'AIzaSyDLGF3sat-5_DBq4CvG49dF-zZM9izjJTs',
            q: term
          }
        });   
        console.log(response)

        setnextPageToken(response.data.nextPageToken)
        setprevPageToken(response.data.prevPageToken)
        setTermBusca(term)

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      }
      
      const navegation = (e) => {
        if(e.target.value === 'Proximo') {
          setPageInfo(nextPageToken)
        } else {
          setPageInfo(prevPageToken)
        } 
        console.log(e.target.value) 
       return handleSubmit(termBusca)
      }

    return (
        <>
          <Pesquisar onTerm={handleSubmit}/>
          <Listar SelectVideo={selectedVideo} videos={videos}/>
          <Navegacao page={navegation} />
        </>
    )
};