function commonElements(input1, input2){


    for (let i = 0; i < input1.length; i++) {
        let current = input1[i]
        if (input2.includes(current)){
            console.log(current);
        }
    }


}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])