function adjacentElementsProduct(nums) {
//  write code here.
  let product = 0;
  let highestProduct =0;

for (let i = 0; i < nums.length - 1; i++) {
     product = nums[i] * nums[i + 1];
    if (product > highestProduct) {
     highestProduct = product;
    }
  }
  return highestProduct;
}


// using reduce method

// function adjacentElementsProduct(nums) {
//   return nums
//     .reduce((max, current, i, arr) => max < current * arr[i + 1] ? current * arr[i + 1] : max)
// }

/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});