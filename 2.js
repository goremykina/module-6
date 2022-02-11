// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function isPrime(number) {
	if (number === 1 || number === 0) {
		return false;
	}
  
	for (let deliver = 2; deliver < number / 2; deliver++) {
        if (number % deliver === 0) {
            return false;
        }
	}
  
 	return true;
}

const numberToCheck = +prompt('Введите число');

if (numberToCheck > 1000) {
	console.log('Данные не верны')
} else {
	let result = isPrime(numberToCheck) ? `${numberToCheck} простое` :`${numberToCheck} не простое`;
	console.log(result);
}
