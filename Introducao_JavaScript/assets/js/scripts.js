
/* operação simples constante e variavel

var y = 0;
var desconto = 0.2;
//boa pratica nomear uma constante com letras maiusculas
const PRECO = 2;
var total = PRECO - desconto;

*/

/*declarando a função

function soma(){ //entre os parenteses vão os parâmetros
    return a + b  //para manipular depois
    console.log(a + b) //quando não será preciso mannipular os valores.
}

chamando a função
soma(3, 5);

soma();//chamar sem atributo quando não é necessário tratar dados exterior à função

*/

/*função mostrar números pares

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
}
console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8]

returnEvenValues(array) 

*/

//pesquisar sobre console.log

//console.log("Hello world") 

//assitir curso DOM

/* mudando caracteristicas com java direto no DOM

Hello world
document.getElementsByTagName('h1')
HTMLCollection [h1]0: h1length: 1[[Prototype]]: HTMLCollection
var heading1 = document.getElementsByTagName('1')[0]
undefined
heading1
undefined
var heading1 = document.getElementsByTagName('h1')[0]
undefined
heading1
<h1>​Olá, mundo!​</h1>​
heading1.style.color = 'red'
'red' 

*/


/* função contador

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

*/
