function avoidObstacles(nums) {
    for (i = 1; i <= Math.max(...nums) + 1; i++) {
        if(nums.every(el => el % i !== 0)) return i
    }
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
