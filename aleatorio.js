const nome = ["Fernanda", "Giuliana", "Maria eduarda", "marcelo", "amanda", "Gustavo", "gabriel"];

export function aleatorio (lista){
  const posicao = math.florr(math.random()* lista.length);
  return lista[posicao];
}

export const nome = aleatorio(nomes)
