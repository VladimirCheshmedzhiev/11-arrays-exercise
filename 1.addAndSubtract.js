function addAndSubtract(array){
let newArray = array.slice();
let newSum = 0;
let originalSum = 0;

    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toString();
        originalSum += Number(array[index]);
    }
    for (let i = 0; i < newArray.length; i++) {
        if(newArray[i] % 2 == 0){
            newArray[i] += i;
            newSum += newArray[i]
        } else if(newArray[i] % 2 != 0){
            newArray[i] -= i;
            newSum += newArray[i]
        }
    }

    console.log(newArray);
    console.log(originalSum)
    console.log(newSum);

}
addAndSubtract([5, 15, 23, 56, 35])
