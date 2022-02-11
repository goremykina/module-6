// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function numberOne(number) {
    return function (numberTwo) {
        return number + numberTwo;
    };
}

const sum = numberOne(2);
console.log(sum(3))
