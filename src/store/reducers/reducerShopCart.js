const ESTADO_INICIAL = {
  cds: [{}],
  feed: [
    {
      id: 1,
      artista: "My Chemical Romance",
      nome: "The Black Parade",
      ano: "2006",
      preco: "50,00",
    },
    {
      id: 2,
      artista: "The Used",
      nome: "Heartwork",
      ano: "2020",
      preco: "45,00",
    },
    {
      id: 3,
      artista: "Fresno",
      nome: "Sua alegria foi cancelada",
      ano: "2019",
      preco: "35,00",
    },
    ,
    {
      id: 4,
      artista: "Fresno",
      nome: "Ciano",
      ano: "2006",
      preco: "35,00",
    },
    ,
    {
      id: 5,
      artista: "My Chemical Romance",
      nome: "I Brought You My Bullets, You Brought Me Your Love",
      ano: "2002",
      preco: "100,00",
    },
    ,
    {
      id: 6,
      artista: "Taking Back Sunday",
      nome: "Louder Now",
      ano: "2006",
      preco: "70,00",
    },
  ],
};

export default function cds(state = ESTADO_INICIAL, action) {
  if (action.type === "ADICIONAR_CARRINHO") {
    return {
      ...state,
      cds: action.cds,
    };
  }
  return state;
}
