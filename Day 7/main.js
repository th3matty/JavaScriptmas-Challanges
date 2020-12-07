function countVowelConsonant(str) {
  // write code here
  let total = 0;
  let strArray = str.toLowerCase().split("");
  const engVowel = ["a", "e", "i", "o", "u"];

  const result = strArray.reduce((accumulator, strArrayElement) =>
    strArrayElement ===
    engVowel.reduce((accumulator, engVowelElement) => engVowelElement)
      ? (total += + 1)
      : (total += + 2)
  );

  return result;
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});