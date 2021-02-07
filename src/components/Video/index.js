import React from "react";

import { connect } from "react-redux";
import './musica.css';

const Video = ({ activeSong, activeArtist }) => {
  return (
    <div className="bg">
      <strong>Artista: {activeArtist.title}</strong>
      <br />
      <span>Música: {activeSong.title}</span>
    </div>
  );
};

export default connect((state) => ({
  // recebemos a licao e modulo ativo com a disparada da action
  activeSong: state.music.activeSong,
  activeArtist: state.music.activeArtist,
}))(Video);
