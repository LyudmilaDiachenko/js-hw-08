// # Задача 4

// Необхідно створити функцію, яка приймає масив імен та callback-функцію. 
// Функція повинна викликати callback-функцію з іменем, яке містить найбільшу 
// кількість літер.


const names = ['Андрій', 'Олександр', 'Максим', 'Юлія', 'Наталія'];
// getLongestName(names, callbackFunction);

function getLongestName(items, sortByFunction){    
    return items.sort(sortByFunction).pop()
}

function callbackFunction(a, b){
    return a.length - b.length
}

console.log(getLongestName(names, callbackFunction));