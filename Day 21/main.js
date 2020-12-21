function sumOfTwo(nums1, nums2, value) {
    //  write code here.
    const wantedVal = value;    
    let result = false;
    
    nums1.forEach((num1,i) => {
        nums2.forEach((num2,i) => {
            if(num1 + num2 === wantedVal){
                result = true
            }
        })
    })
    return result
}



/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});