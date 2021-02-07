import React from "react";
import { connect } from "react-redux";
import './feed.css';
import { bindActionCreators } from "redux";
// nossas actions
import * as CarrinhoAction from "../../store/actions/actions";

const Feed = ({ cds, adicionarCarrinho }) => {
  return (
    <section>
      <div className="title">
      <h4>EMOshop xD</h4>
      </div>
      
      <h3>CDs disponíveis</h3>
      <ul className="albuns">
        {cds.map((item) => (
          <li key={item.id}>
           {item.artista} | {item.nome} | {item.ano} | {item.preco}
            <button onClick={() => adicionarCarrinho(item)}>Comprar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cds: state.cds.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
