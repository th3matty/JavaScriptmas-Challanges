function extractMatrixColumn(matrix, column) {
    //  write code here.    
    const result = []; 
    matrix.map((subArr, i) => {
        if(subArr[column] !== undefined){
            result.push(subArr[column])
        }
    })
    return result;
}



/**
* Test Suite 
*/
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        
        // act
        const result = extractMatrixColumn(matrix, column);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 0, 3]);
    });
     it('returns largest positive integer possible in case of mixed length inner arrays', () => {
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3]];
        const column = 3;   
        const result = extractMatrixColumn(matrix, column);
        console.log("result 2: ", result);
        expect(result).toEqual([2,4]);
    });
});