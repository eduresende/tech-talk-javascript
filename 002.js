/*
 * Valor: pode inclusive ser outro objeto,
 *        possibilitando criação de estruturas complexas como arvores ou grafos
*/

person.car = { model: "Fusca", year: 1969 } // Atribuição direta

person.car // { model: 'Fusca', year: 1969 }
person.car.model // "Fusca"

person.birthdate.month; // TypeError: Cannot read property 'month' of undefined

person.birthdate && person.birthdate.month; // undefined

















