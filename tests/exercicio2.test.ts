// Crie pelo menos um teste que valida sua implementação.
import {converterData} from '../src/exercicio2'

describe('Teste exercicio 2', () => {
    test('Função para converter data de aaa/mm/dd para dd/mm/aaaa', () => {
        const result = converterData('1997/12/03')

        expect(result).toEqual('3/12/1997')
    })
})