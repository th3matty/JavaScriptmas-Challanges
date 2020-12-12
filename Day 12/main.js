function validTime(str) {
    //  write code here.
    let splitted = str.split(":")
    const hour = parseInt(splitted[0])
    const min = parseInt(splitted[1])    
    
    let result = hour < 24 && min < 60? true : false
    return result
   
}
// solution 2:

function validTime(str){
    const [hour, minute] = str.split(":").map(el => parseInt(el))
    return hour >= 0 && hours < 24 && minutes >= 0 && minutes <60
}



/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});
