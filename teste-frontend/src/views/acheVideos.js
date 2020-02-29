import React, { useState } from "react";
import Pesquisar from '../components/Pesquisar';
import Listar from '../components/Listar';
import ReactPaginate from 'react-paginate';
import youtube from '../services/youtube';
import "../components/paginate.scss"

export default () => {

    // const [data, setData] = useState({})

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [totalResults, setTotalResults] = useState("");
    const [pageInfo, setPageInfo] = useState("CAUQAA");
    const [nextPageToken, setnextPageToken] = useState("");
    const [prevPageToken, setprevPageToken] = useState("");
    const [termBusca, setermBusca] = useState("");

     
    async function handleSubmit (term) {
        const response = await youtube.get("search", {
          params: {
            part:'snippet',
            maxResults: 5,
            pageToken: pageInfo,
            key: 'AIzaSyDqB66f3MzBt6Z0A1rMXhmI1ciWEOMs0Tw',
            q: term
          }
        });
        console.log(response)



        setTotalResults(response.data.pageInfo.totalResults)

        setnextPageToken(response.data.nextPageToken)
        setprevPageToken(response.data.prevPageToken)

        setermBusca(response.config.params.q)

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      }  

    const handlePageClick = (e) => {
        if (e.target === ">") {
          setPageInfo(nextPageToken)
        } else if (e.target === "<") {
          setPageInfo(prevPageToken)
        } else {
          setPageInfo("CAUQAA")
        }
        return handleSubmit(termBusca)
    }

    return (
        <>
          <Pesquisar onTerm={handleSubmit}/>
          <Listar SelectVideo={selectedVideo} videos={videos}/>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={'...'}
            pageCount={totalResults / 5}
            onPageChange={handlePageClick}
            breakClassName={'rest'}
            containerClassName={'containerNavigation'}
            pageClassName={'page'}
        />
        </>
    )
};