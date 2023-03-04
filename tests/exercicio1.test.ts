import {stringToNumber} from '../src/exercicio1'

// Crie pelo menos um teste que valida sua implementação.
describe('Teste do exercicio 1', () => {
    test('Função recebe string e transforma em number', () => {
        const result = stringToNumber("50")

        expect(typeof result).toBe("number")
     })
})

