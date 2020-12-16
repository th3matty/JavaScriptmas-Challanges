function insertDashes(arr) {
    // write code here
    let splitted = arr.split(" ");
    return splitted.map(word => word.split("").join("-")).join(" ");
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
    it('insert dashes in between chars', () => {
        // arrange
        const value = "bobo hello";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("b-o-b-o h-e-l-l-o");
    });
    it('insert dashes in between chars', () => {
        // arrange
        const value = "a";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a");
    });
    it('insert dashes in between chars', () => {
        // arrange
        const value = "a b";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a b");
    });
});