"use strict"

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('Ok!');
}

(num ===50) ? console.log('Ok!') : console.log('Error'); //Тернарный оператор потаму что участывают три аргумента (причом единственный тернарный оператор настоящий момент) (позволяет экономить место и компактность кода).
4 + 4 //Бинарный аргумент
+4 //Унарный аргумент
+'4'; //Унарный + работающий с одной строкай.

const num = 50;
switch (num) {
    case 49: //Тут только на сравнения (с :)
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;   
    case 51:
        console.log('В точку!');
        break; 
    default:   //Если нет никакая совпадения
        console.log('Не в этот раз');
            break;    
}
