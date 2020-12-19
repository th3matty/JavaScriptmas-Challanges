function alphabetSubsequence(str) {
    //  write code here.
    if(typeof str !== "string" || str === "" || str === undefined) {
        return false;
    }
    
    let splitted = str.split("");     
    let charCodeArray = new Set(str);
    
    if(charCodeArray.size !== splitted.length){
        return false
    }else{
        let charCodeArray =[];        
        splitted.map((char,i)=> charCodeArray.push(char.charCodeAt(0)));
        
        let result;
        charCodeArray.map((nums,i) => result = i < i+1 ? true : false );
        return result;
}}

//  ==>> another solution only with Set
// Set removes all duplicates and return array which is aphabetically in order

// function alphabetSubsequence(str) {
//     let splitted = str.split("");
//     let arraySet = new Set(str)
    
//     if(arraySet.size === splitted.length && JSON.stringify([...arraySet]==splitted)){
//         return true
//     }else return false
// }


/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdce';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});