function avoidObstacles(nums) {
    
    // sort the array to
    let sorted = nums.sort()
    // loop trough it and find the smallest number
    let smallestNumber = sorted.map((elem) => elem+1).find(elem => elem+1)
    return smallestNumber;
}


/**
* Test Suite 
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        // [1,3,5,6,7,9]
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});