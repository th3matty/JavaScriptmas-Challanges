function domainType(domains) {
    //  write code here.
    console.log("arg domains:",domains)
    let goDaddyDomains = ["organization","commercial","network","information"];
    
    let result = [];
    domains.map((domain,i)=>{
       if(domain.includes(".org")){
           result.push(goDaddyDomains[0])
       }
       if(domain.includes(".com")){ 
           result.push(goDaddyDomains[1])         
       }
       if(domain.includes(".net")){
          result.push(goDaddyDomains[2])
       }
       if(domain.includes(".info")){
           result.push(goDaddyDomains[3])
       }
    })
    return result;
}

// another solution with split and pop()

// function domainType(domains){
//     const types = {"com": "commercial", "org": "organization", "net": "network", "info": "information"};
    
//     return domains.map((domain) => types[domain.split(".").pop()])
// }



/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});