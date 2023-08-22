// # Задача 3
// Необхідно створити функцію, яка приймає масив 
// строк та callback-функцію. 
// Функція повинна викликати callback-функцію з масивом, 
// який містить тільки ті строки, які містять вказаний символ.


function filterStrings(arr, char, callbackFunction){    
    return arr.filter(s => callbackFunction(s, char))
}


function callbackFunction(str, char){
    return str.includes(char)
}


console.log(filterStrings(
    ['hello', 'world', 'javascript', 'callback'], 
    'a', 
    callbackFunction
));
