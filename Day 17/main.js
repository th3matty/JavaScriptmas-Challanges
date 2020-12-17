function differentSymbolsNaive(str) {
    //  write code here.    
    if(str === "" || str === undefined || str === null) return 0;
    
    let dublicateChars = new Set(str);    
    return dublicateChars.size
}

// <--------- another way --------->

//function with split(), includes() and push() method

// function differentSymbolsNaive(str){
//     //  write code here.
//     let result = [];
//     if(str === "" || str === undefined || str === null) return 0;
    
//     str.split("").forEach((char)=> !result.includes(char)? result.push(char) : char)
    
//     return result.length
// }



/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters when input is all strings', () => {
        const str = 'cabca';
        const result = differentSymbolsNaive(str);
        expect(result).toBe(3);
    });
    
    it('returns count of unique characters when input is all symbols', () => {
        const str = '+-$%+-';
        const result1 = differentSymbolsNaive(str);
        expect(result1).toBe(4);
    });
        
    it('returns count of unique characters when input is mix', () => {
        const str = 'ca+=+cba';
        const result2 = differentSymbolsNaive(str);
        expect(result2).toBe(5);
    });
    
     it('returns count of unique characters when input is an empty string', () => {
        const str = '';
        const result3 = differentSymbolsNaive(str);
        expect(result3).toBe(0);
    });
    
    it('returns 0 if value is falsy', () => {
        const str = null;
        const result4 = differentSymbolsNaive(str);
        expect(result4).toBe(0);
    });
    
     it('returns count of 1 character when the input string of 1 character', () => {
        const str = 'a';
        const result5 = differentSymbolsNaive(str);
        expect(result5).toBe(1);
    });
    
    it('returns count of unique letter (upper and lower case) characters', () => {
        const str = 'Abhijith';
        const result6 = differentSymbolsNaive(str);
        expect(result6).toBe(6);
    });
    
     it('returns count of unique chars in Upper and lower case string', () => {
        const str = 'ZZZzzzz';
        const result7 = differentSymbolsNaive(str);
        expect(result7).toBe(2); // can be changed to 1 if you are ignoring the case
    });
});