function fizzBuzz(){
    const result = [];
    let textToInsert = "";
    for(let i = 1; i<50; i++){
        textToInsert = ""
        if(i % 3 === 0) {
            textToInsert += "Fizz"
        }
        if(i % 5 === 0) {
            textToInsert += "Buzz"
        }
        textToInsert ? result.push(textToInsert) : result.push(i);    
    }
    console.log(result)
    return result;
}

module.exports = fizzBuzz;