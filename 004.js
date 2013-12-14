/*
 * As propriedades do prototype são somente leitura
 *
 * Mudar o objeto Não muda seu prototype
*/

employee.firstName = "Beltrano"

employee.firstName // "Beltrano"
person.firstName; // "Fulano"


/*
 * Novas propriedades adicionadas ao prototype estarão
 * disponíveis para o objeto
*/

person.weight = 80;

employee.weight // 80










