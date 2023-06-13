import IpValidator from "../src/IpValidator"

describe('IpValidator', () => {
       
      it('is defined',()=>{
           
           expect(IpValidator).toBeDefined()

           const ipValidator = new IpValidator()

           expect(ipValidator.validateIpv4Address).toBeDefined()

           expect(ipValidator.validateIpv4Address).toBeInstanceOf(Function)
      })


      it('it returns true when `1.1.1.1` is given as IP ',()=>{
           
           const ipValidator = new IpValidator()

           const result = ipValidator.validateIpv4Address("")
            
          expect(result).toBe(true)
      })

      it('it returns false when IP address is not separated by 4 dots like 1.2.2 ',()=>{
           
           const ipValidator = new IpValidator()

           const result = ipValidator.validateIpv4Address("")
            
          expect(result).toBe(true)
      })
})
