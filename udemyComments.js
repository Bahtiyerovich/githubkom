"use strict";

alert('Hello');
const result = confirm("Are you here?");
console.log(result);
const answer = +prompt("Are you yet 18?", "");
console.log(answer + 5);
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
const user = "Ivan";
alert(`Privet, ${user}`);

const answers = [];
answers [0] = prompt('What is your name?', '');
answers [1] = prompt('What is your surname?', '');
answers [2] = prompt('How old are you?', '');
console.log(typeof(answers));

// 9 //

console.log('arr' + "-object");
console.log(4 + +"5"); //+ стоящий перед опр. объектом называется "унарным" 

//"инкримент и дикримент" они сущ. для укрочения кода,соответственно увеличивает и уменьшает значение на 1
let incr = 10,
    decr = 10;

//incr++; //оператор инкримента для увел. на 1  постфиксные incr++
//decr--; //оператор декримента для умень. на 1 постфиксные decr++
++incr; //оператор инкримента для увел. на 1   префиксные ++incr
--decr; //оператор декримента для умень. на 1  префиксные ++decr

console.log(++incr);
console/log(--decr);
console.log(5%2);

console.log(2*4 === 8); //=происваивание; ==равенство; ===строгая сравнение 
//&& оператор "и" и это правда и это правда
//|| оператор "или" или это правда или это правда
const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose); //если даже один из агрументом будет true то всегда ответ будет true. "!" оператор отрецании

console.log(2 + 2 * 2 !== '6'); //"!=" знак неравенство

// 10 //

