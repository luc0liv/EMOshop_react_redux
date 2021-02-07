import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//  colocando nossas Actions dentro de um Objeto
import * as CourseActions from "../../store/actions/actions";
import './style.css';

const Sidebar = ({ artist, toggleLesson }) => {
  return (
    <aside className="fundo">
      {artist.map((artist) => (
        <div key={artist.id}>
          <strong>{artist.title}</strong>
          <ul>
            {artist.song.map((song) => (
              <li key={song.id}>
                {song.title}
                {/* define uma licao e modulo como ativa.  */}
                <button onClick={() => toggleLesson(artist, song)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

// funcao que retorna o nosso estado
const mapStateToProps = (state) => ({
  artist: state.music.artist,
});

//  funcao que retorna um dispatch para disparar uma action
const mapDispatchToProps = (dispatch) =>
  // mapeando nosso Objeto em forma de propriedade
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);