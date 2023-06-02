function equalNumbersSequence(array){
let sequence = [];
let count = 1;
let maxCount = 0;
let maxSequenceNum = 0;

    for (let i = 0; i < array.length; i++) {
        let nextNumber = array[i+1];
        let currentNumber = array[i];
        let previousNumber = array[i-1];
        currentNumber = String(currentNumber)

        if(i !== 0){
            if (currentNumber == previousNumber){
                count++
                if(count > maxCount){
                    maxCount = count;
                    maxSequenceNum = currentNumber;
                }
            }else{
                count = 1;
            }
        }
    
    }
       
    console.log(`${(maxSequenceNum+' ').repeat(maxCount)}`)
}
equalNumbersSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )