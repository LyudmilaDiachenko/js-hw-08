// # Задача 1

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять певне слово.

const arrs = ['Hello World', 'Goodbye', 'JavaScript', 'World of Warcraft'];

function myFunction(array, callback){    
    return array.filter(e => callback(e))
}

function myCallback(str){
    return str.includes('World')
}

console.log(myFunction(arrs, myCallback));