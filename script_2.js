num = prompt("De quel nombre veut tu calculer la factorielle ?")

function factorialize(num) {
  var result = num;

  if (num === 0 || num === 1)
    return 1;


  while (num > 1) {
    num = num -1;
    result = result * num;
  }

  return result;
}

result = factorialize(num)

console.log(result);
alert(`Le factoriel de ${num} est ${result}`)
