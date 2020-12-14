function arrayMaximalAdjacentDifference(nums) {
    //  write code here.
    let saveNumbers = []
    for ( let i =0 ; i < nums.length-1; i++){        
        saveNumbers.push(Math.abs(nums[i] - nums[i+1]));        
        if(saveNumbers.length === nums.length-1){
            return Math.max(...saveNumbers);
        }
               
    }
}

// solution 2 with reduce method:

// function arrayMaximalAdjacentDifference(nums) {
//     let maxDifference = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         const diff = Math.abs(nums[i] - nums[i + 1]);
//         if (diff > maxDifference) maxDifference = diff;
//     }
//     return maxDifference;
// }



/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});