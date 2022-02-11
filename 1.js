// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


function printNumberOfEvenOddZeros(arr) {
  let odd = 0;
  let even = 0;
  let zeros = 0

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) {
      continue;
    }

    if (arr[i] % 2 === 0) {
      if (arr[i] === 0) {
        zeros++
      } else {
        even++
      }
    } else {
        odd++
    }
  }

  console.log(`нечетных - ${odd}, четных - ${even}, нулей - ${zeros}`)
}

const values = [0, null, 1, 3, '', 1, 2];
printNumberOfEvenOddZeros(values)
