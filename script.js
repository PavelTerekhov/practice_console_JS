'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 const a = prompt('Один из последних просмотренных фильмов?', ''),
       b = +prompt('На сколько оцените его?', ''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 1; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);


// Метка (first:) + continue во вложенном цикле 

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue
            console.log(`Third level ${k}`);
        }
    }

}




// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно
// 4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 
// Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]


//1

for (let i = 5; i < 11; i++) {
    console.log(i)
  }  

//2

for (let i = 20; i > 9; i--) {
    if (i === 13) break;
    console.log(i);
}

//3

for (let i = 2; i < 11; i++) {
    if (i%2 != 0) continue;
    console.log(i)
}

//4
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//5

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
