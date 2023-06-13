import IpValidator from "../src/IpValidator"

describe('IpValidator', () => {
       
      it('is defined',()=>{
           
           expect(IpValidator).toBeDefined()

           const ipValidator = new IpValidator()

           expect(ipValidator.validateIpv4Address).toBeDefined()

           expect(ipValidator.validateIpv4Address).toBeInstanceOf(Function)
      })
})
