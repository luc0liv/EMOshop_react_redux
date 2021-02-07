import React from "react";
import { connect } from "react-redux";
import cds from "../../store/reducers/reducerShopCart";
import './cart.css';

const ShopCart = ({cds}) => {
  return (
    <div className="carrinho">
      <h1>Carrinho de Compras</h1>
      <p>{cds.artista} | {cds.nome} | {cds.ano} | {cds.preco}</p>
    </div>
  );
};

export default connect((state) => ({
    cds: state.cds.cds
}))(ShopCart);
