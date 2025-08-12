/* Global Scope
 
- Variabel yang dibuat di luar fungsi block 
- Bisa diakses di manapun seteleah variabel dibuat

*/

var globalVar = "Aku global!";

function test() {
 console.log(globalVar);
}




/* Function Scope(Local)
 
 - Variabel dibuat di dalam fungsi dengan "var", "let", atau "const"
 - Hanya bisa diakses di dalam fungsi itu saja

*/
 
function test() {
    var localVar = "Aku Lokal";
    console.log(localVar);
}

console.log(localVar); // <<-- akan error: Tidak bisa diakses diluar scope fungsi
 
 




/* Block Scope
 - Fitur block scope muncul bersamaan dengan "let", dan "const" di ES6 (ECMAScript 2015).
 - Variable yang dibuat di dalam cakupan block dan dibuat dengan "let", dan "const"
 - Variable hanya bisa diakses di dalam cakupan Block saja ({...}), di mana dia didefinisikan.
 
*/ 
 

{
    // artinya "let" dan "const" itu variabel block scope

    let blockVar = "Aku block scope!"; 
    const anotherBlock = "Aku Juga!";
    var varInsideBlock = "Aku masih bisa diakses";
    console.log(blockVar); // bisa diakses
    console.log(anotherBlock); // ini juga bisa diakses
}

console.log(blockVar); // error: tidak bisa diakses di luar cakupan block
console.log(varInsideBlock); // bisa diakses biar pun var dibuat di dalam block

/*
 *
 *
 *
 *
 *
 *
 */
