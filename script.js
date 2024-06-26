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
       b = +prompt('На сколько оцените его?', '');
    //    c = prompt('Один из последних просмотренных фильмов?', ''),
    //    d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
    


// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
            i--;
    }
}


// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");}
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }


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


// 1) Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив


//1
const arr = [3, 5, 8, 16, 20, 23, 50];
const resultArr = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++) {
  resultArr[i] = arr[i];
}

console.log(resultArr);

// 2) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

//2
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } 
    if (typeof(data[i]) === 'string') {
        data[i] = data[i] + " - done"
    }
}
console.log(data);

// 3) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

//3 
const dataArr = [5, 10, 'Shopping', 20, 'Homework'];
const resultDataArr = [];

for (let i = 1; i <= dataArr.length; i++) {
    resultDataArr[i - 1] = dataArr[dataArr.length - i]
}

console.log(resultDataArr);


// Необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let resultChristmas = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        resultChristmas += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        resultChristmas += "*";
    }
    resultChristmas += "\n";
}

console.log(resultChristmas);


// Задачи:

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон')возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

function sayHello(user) {
    return `Привет, ${user}`;
    }


// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5)возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(number) {
    return [(number - 1), number, (number + 1)];
   }
   

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂


function getMathResult(BaseNumber, RepeatNumber) {
    if (typeof(RepeatNumber) !== "number" || RepeatNumber <= 0) {
        return (BaseNumber);
      } 

    let str = '';

    for (let i = 1; i <= RepeatNumber; i++) {
        if (i === RepeatNumber) {
            str += `${BaseNumber * i}`;
            // Тут без черточек в конце
        } else {
            str += `${BaseNumber * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;

}




/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilmsPacticathird;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilmsPacticathird == '' || numberOfFilmsPacticathird == null || isNaN(numberOfFilmsPacticathird)) {
        numberOfFilmsPacticathird = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDBPacticathird = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '').trim();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();




// Упражнение по написанию кода 7: (*) Продвинутые задания на использование функций

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function squareAndVolumeCube(edgeLength) {
    if (typeof(edgeLength) !== 'number' || edgeLength < 0 || !Number.isInteger(edgeLength)) {
        console.log("При вычислении произошла ошибка")
    } else {
        console.log(`Объем куба: ${edgeLength * edgeLength * edgeLength}, площадь всей поверхности: ${6 * (edgeLength * edgeLength)}`);
    }
}

squareAndVolumeCube(5);


// 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

//Моё решение:

// function getCoupeNumber(place) {
//     if (typeof(place) !== 'number' || !Number.isInteger(place) || place < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места'
//     } else if (place <= 0 || place > 36) {
//         return '"Таких мест в вагоне не существует"'
//     } else if (place > 0 && place <= 4) { 
//         return 1;
//     } else if (place > 4 && place <= 8) { 
//         return 2;
//     } else if (place > 8 && place <= 12) { 
//         return 3;
//     } else if (place > 12 && place <= 16) { 
//         return 4;
//     } else if (place > 16 && place <= 20) { 
//         return 5;
//     } else if (place > 20 && place <= 24) { 
//         return 6;
//     } else if (place > 24 && place <= 28) { 
//         return 7;
//     } else if (place > 28 && place <= 32) { 
//         return 8;
//     } else if (place > 32 && place <= 36) { 
//         return 9;
//     }

// }

// getCoupeNumber(0);



// Более простое решение:

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);




// Упражнение по написанию кода 8: (*) Продвинутые задания на использование функций.

// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

function findMaxNumber(num1, num2, num3, num4) {

    if (typeof(num1) !== 'number' || num1 == undefined ||
        typeof(num2) !== 'number' || num2 == undefined || 
        typeof(num3) !== 'number' || num3 == undefined || 
        typeof(num4) !== 'number' || num4 == undefined ) {
        return 0;
    } else {
        return Math.max(num1, num2, num3, num4);
    }

}
findMaxNumber(1, 5, '10'); 



// Упражнение по написанию кода 9: (**) Задача с собеседований на числа Фибоначчи
// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '',
        first = 0,
        second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}
    
fib(4);




//         ОБЪЕКТЫ Деструкторизация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {   //Свой созданный метод
        console.log('Test');
    }
};

options.makeTest(); // Запуск своего созданного метода


console.log(options.name);

console.log(options['colors']['bg']); // Обращение к вложенному свойству в объекте

delete options.name; // удаление свойства



let counter = 0 // Приём счётщика для поиска кол-ва ключ: значение

for (let key in options) {
    if (typeof(options[key] === 'object')) {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // Метод перебора для вложенной структуры в объекте
        counter++
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); // Метод перебора for in объекта options
    counter++
    }
}

console.log(counter);

// Деструктуризация оюъекта 

const {border, bg} = options.colors; 
console.log(border);


    