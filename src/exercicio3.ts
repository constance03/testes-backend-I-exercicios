// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem)
export interface TUsuarios {
    nome: string,
    idade: number
}


export const usuarios: TUsuarios[] = [
  {
    nome: "Astrodev",
    idade: 12,
  },
  {
    nome: "Maria",
    idade: 25,
  },
];