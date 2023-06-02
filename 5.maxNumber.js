function maxNumber(input){
let result = '';
    for (let i = 1; i <= input.length; i++) {
        let isMax = true;
        let currentNumber = Number(input[i-1]);
        for(let j = i; j < input.length; j++){
            let nextNumber = Number(input[j]);
            if(nextNumber >= currentNumber){
                isMax = false;
                break;

            }
        }
        if (isMax){
            result += `${currentNumber} `;
        }
        
    }

    console.log(result)
}
maxNumber([1, 4, 3, 2] )