// Desenvolva um teste garantindo que o Astrodev está presente nessa lista.

import {usuarios} from '../src/exercicio3'

describe('Teste exercicio 3', () => {
    test('Testar se o array de usuarios contem o usuario Astrodev', () => {
        const result = usuarios.find(usuario => usuario.nome === 'Astrodev');
        expect(result).toEqual({ nome: 'Astrodev', idade: 12 });

    })
})