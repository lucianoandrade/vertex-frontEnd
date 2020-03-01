import React from "react";
import Detalhes from '../components/Detalhes';
import youtube from '../services/youtube';

export default (props) => {
    console.log(props)

    async function handleSubmit () {
      const response = await youtube.get("videos", {
        params: {
          id: props.history.location.state.video.id.videoId,
          part:'snippet,statistics',
          // key: 'AIzaSyDqB66f3MzBt6Z0A1rMXhmI1ciWEOMs0Tw',
          key: 'AIzaSyDLGF3sat-5_DBq4CvG49dF-zZM9izjJTs',
        }
      });
      return response      
    }

    return (
        <>  
          <Detalhes onDetalhes={handleSubmit}/>
        </>
    )
};