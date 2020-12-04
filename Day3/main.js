function chunkyMonkey(values, size) {
    //  write code here.
    
    // our variable which holds the first argument (values)
    let arrayToSplit = values;
    // slice the array in two parts
    if(size > arrayToSplit.length){
        console.log(" it wont work, size arg is too big for this equation")
    }else{
        let splittedArrayFirstElements = arrayToSplit.slice(0,size);
        let splittedArrayLastElements = arrayToSplit.slice(size, arrayToSplit.length);
        
        console.log("splittedArrayFirstElements:", splittedArrayFirstElements);
        console.log("splittedArrayLastElements:",splittedArrayLastElements);
        return [splittedArrayFirstElements, splittedArrayLastElements];
    }
    
}


/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});