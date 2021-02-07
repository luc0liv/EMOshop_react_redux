export function toggleLesson(artist, song) {
  return {
    // é obrigatorio passar um type para a action
    type: "TOGGLE_LESSON",
    // aqui é o valor recebido do botão e enviado para onde quisermos
    artist,
    song,
  };
}

export function adicionarCarrinho(cds) {
  return {
    type: "ADICIONAR_CARRINHO",
    cds,
  };
}
