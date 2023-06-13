import IpValidator from '../src/IpValidator';

describe('IpValidator', () => {
       
      it('is defined',()=>{
           
           expect(IpValidator).toBeDefined()

           const ipValidator = new IpValidator()

           expect(ipValidator.validateIpv4Address).toBeDefined()

           expect(ipValidator.validateIpv4Address).toBeInstanceOf(Function)
      })


      it('it returns true when `1.1.1.1` is given as IP ',()=>{
           
           const ipValidator = new IpValidator()

           const result = ipValidator.validateIpv4Address("1.1.1.1")
            
          expect(result).toBe(true)
      })

      it.each([
        {
        address:"1.2.2"
      },
        {
        address:"1."
      },
        {
        address:"1.1.1."
      },
      {
        address:"1.1.1.1."
      },
       {
        address:"1.1.1.1.3"
      },

    ])('it returns false when IP address $address is not separated by 4 dots like 1.2.2 ',({address})=>{
           
           const ipValidator = new IpValidator()

          expect(()=>ipValidator.validateIpv4Address(address)).toThrowError("Ip address has invalid structure : "+address)
      })

    describe('Addresses ending with 255 are invalid', () => {
         
       it('1.1.1.255 should return false',()=>{
             
          const ipValidator = new IpValidator()
          
          const result = ipValidator.validateIpv4Address('1.1.1.255')

          expect(result).toBe(false)
          
       } )
    })
    
})
