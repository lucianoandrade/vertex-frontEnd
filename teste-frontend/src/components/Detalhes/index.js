import React, {useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom'
import youtube from '../../services/youtube';

 function Detalhes({onDetalhes}) {

  const videoid = onDetalhes.history.location.state.video.id.videoId;
  const [embed, setEmbed] = useState('');
  const [titulo, setTitulo] = useState('');
  const [like, setLike] = useState('');
  const [deslike, setDeslike] = useState('');
  const [visualizacao, setVisualizacao] = useState('');
  const [descricao, setDescricao] = useState('');
    
  useEffect(() => {
    youtube.get("videos", {
      params: {
        id: videoid,
        part:'snippet,statistics',
        // key: 'AIzaSyDqB66f3MzBt6Z0A1rMXhmI1ciWEOMs0Tw',
        key: 'AIzaSyDLGF3sat-5_DBq4CvG49dF-zZM9izjJTs',
      }
    }).then(response => { return (
        setEmbed(response.data.items[0].id),
        setTitulo(response.data.items[0].snippet.title),
        setLike(response.data.items[0].statistics.likeCount),
        setDeslike(response.data.items[0].statistics.dislikeCount),
        setVisualizacao(response.data.items[0].statistics.viewCount),
        setDescricao(response.data.items[0].snippet.description)
      )})
  },[videoid]);

  const videoSrc = `https://www.youtube.com/embed/${embed}`;

  return (
    <>
      <iframe src={videoSrc} allowFullScreen title='Video player' /><br/><br/>
      <div>{titulo}</div><br/><br/>
      <div>like: {like}</div><br/><br/>
      <div>deslike: {deslike}</div><br/><br/>
      <div>visualizaões: {visualizacao}</div><br/><br/>
      <div>descriço: {descricao}</div><br/><br/>
      <Link to='/'>
        <Button variant="contained" color="primary">Voltar</Button>
      </Link>
    </>
  );
}

export default Detalhes;