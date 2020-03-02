import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from "@material-ui/icons/Description";

import youtube from "../../services/youtube";
import "./styles.scss";

function Detalhes({ onDetalhes }) {
  const videoid = onDetalhes.history.location.state.video.id.videoId;
  const [embed, setEmbed] = useState("");
  const [titulo, setTitulo] = useState("");
  const [like, setLike] = useState("");
  const [deslike, setDeslike] = useState("");
  const [visualizacao, setVisualizacao] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    youtube
      .get("videos", {
        params: {
          id: videoid,
          part: "snippet,statistics",
          key: "AIzaSyDqB66f3MzBt6Z0A1rMXhmI1ciWEOMs0Tw"
        }
      })
      .then(response => {
        return (
          setEmbed(response.data.items[0].id),
          setTitulo(response.data.items[0].snippet.title),
          setLike(response.data.items[0].statistics.likeCount),
          setDeslike(response.data.items[0].statistics.dislikeCount),
          setVisualizacao(response.data.items[0].statistics.viewCount),
          setDescricao(response.data.items[0].snippet.description)
        );
      });
  }, [videoid]);

  const videoSrc = `https://www.youtube.com/embed/${embed}`;

  return (
    <>
      <section className="containerDetails">
        <iframe
          src={videoSrc}
          className="videoSrc"
          allowFullScreen
          title="Video player"
        />
        <h3 className="title">{titulo}</h3>
        <div className="infos">
          <div className="like">
            <ThumbUpIcon />
            {like}
          </div>
          <div className="deslike">
            <ThumbDownAltIcon />
            {deslike}
          </div>
          <div className="visualizacao">
            <VisibilityIcon />
            {visualizacao}
          </div>
          <div className="descricao">
            <DescriptionIcon />
            {descricao}
          </div>
        </div>
        <Link to="/">
          <Button variant="contained" className="Btnvoltar" color="primary">
            Voltar
          </Button>
        </Link>
      </section>
    </>
  );
}

export default Detalhes;
