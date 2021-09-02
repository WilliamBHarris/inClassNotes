/* 
Scope is simply the hierarchy of variables in our code.
- global scope or parent scope
- local scope or child scope.
*/

let global = 'Earth';

function scopeExample(){
    let local = 'Indy';
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}`);
}

scopeExample();

//The 'local' variable can't be accessed outside of the function.