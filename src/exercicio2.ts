// Crie uma função que recebe uma data no formato "aaaa/mm/dd" e retorna outra string no formato "dd/mm/aaaa".
// Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"

export function converterData (data : string): string {
    const originalDateString = data;
    const originalDate = new Date(originalDateString);

    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
    const year = originalDate.getFullYear();

    return `${day}/${month}/${year}`;
}