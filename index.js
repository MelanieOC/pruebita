/*Ejercicio 1: funcion que recibe un array y un numero, devuelve la multiplicacion de los
elementos del array e inclyendo el numero*/
function ejercicio1(arr, num){
  if(isNaN(num)){num = 1};//Si no ingresan el parametro num
  return arr.reduce(function(producto,numero){return producto*numero;})*num;
}

//Pruebas unitarias
var assert = require('assert');
describe ('Ejercicio 1', function () {
  it ('Test ([4,4,12,5], 9) ', function () {
    assert.equal(8640, ejercicio1([4,4,12,5], 9));
  });
  it ('Test ([4,4,12,5], "Hola") ', function () {
    assert.equal(960, ejercicio1([4,4,12,5], "Hola"));
  });
  it ('Test ([4,4,12,5]) ', function () {
    assert.equal(960, ejercicio1([4,4,12,5]));
  });
});
