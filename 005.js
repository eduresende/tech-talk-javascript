/*
 * Removendo propriedades
 *
*/

employee.job // "Developer"
delete employee.job;
employee.job // undefined

employee.firstName // Beltrano
delete employee.firstName
employee.firstName // Fulano - voltou a ser o valor do prototype

employee.age // 25
delete employee.age
employee.age // 25 - não pode remover do prototype

delete person.age
employee.age // undefined











