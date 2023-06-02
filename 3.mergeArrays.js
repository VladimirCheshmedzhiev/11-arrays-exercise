function mergeArrays (input1, input2){
let thirdArray = [];

    for (let index = 0; index < input1.length; index++) {
        if(index % 2 == 0) {
            input1[index] = Number(input1[index]);
            input2[index] = Number(input2[index]);
            let result = input1[index] + input2[index];
            thirdArray.push(result);
        } else {
            let result2 = input1[index] + input2[index];
            thirdArray.push(result2);
        }
    }
    console.log(thirdArray.join(' - '))

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])