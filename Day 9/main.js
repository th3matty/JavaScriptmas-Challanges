function sumOddFibonacciNumbers(num) {
    //  write code here.
        if (num <= 1) return 1;
    // Fibonacci Sequence: 0,1,1,2,3,5,8,13,21
    let fiboSeq= [];
    
    // fiboSequence starting at index 1
    for( fiboSeq = [0,1],i=1; i< num; i++){        
        fiboSeq.push(fiboSeq[i]+fiboSeq[i-1]);
    };
    
    // filter the fiboSeq by its odd Number
    const fiboOdd = fiboSeq.filter((number)=> {
        if(number < num){
            return number %2
        }
        });
    return sumOddFiboSeq = fiboOdd.reduce((a,b)=> a+b)
}



/**
* Test Suite 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;
        
        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(1785);
    });
});