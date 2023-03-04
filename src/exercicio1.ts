// instalar o jest e tipagens
//npm i -D jest @types/jest ts-jest

// Crie uma função que recebe um número no formato string e retorna o mesmo número, porém no formato number.
// Exemplo: a entrada "50" gera a saída 50
export function stringToNumber (string: string): number {
    return Number(string)
}