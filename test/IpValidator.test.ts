import IpValidator from '../src/IpValidator';

describe('IpValidator', () => {
       
      it('is defined',()=>{
           
           expect(IpValidator).toBeDefined()

           const ipValidator = new IpValidator()

           expect(ipValidator.validateIpv4Address).toBeDefined()

           expect(ipValidator.validateIpv4Address).toBeInstanceOf(Function)
      })


      it('returns true when `1.1.1.1` is given as IP ',()=>{
           
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
          const result = ipValidator.validateIpv4Address(address)
          expect(result).toBe(result)
    })

    describe('Addresses ending with 255 are invalid', () => {
         
       it.each([  {
        address:"1.2.2.255"
      },
        {
        address:"1.1.3.255"
      },
        {
        address:"1.1.1.255"
      },
      {
        address:"1.15.1.255"
      },
       {
        address:"255.1.1.255"
      },])('$address should return false',({address})=>{
             
          const ipValidator = new IpValidator()
          
          const result = ipValidator.validateIpv4Address(address)

          expect(result).toBe(false)
          
       } )
    })

        describe('Addresses ending with 0 are invalid', () => {
         
       it.each([  {
        address:"1.2.2.0"
      },
        {
        address:"1.1.3.0"
      },
        {
        address:"1.1.1.0"
      },
      {
        address:"1.15.1.0"
      },
       {
        address:"255.1.1.0"
      },])('$address should return false',({address})=>{
             
          const ipValidator = new IpValidator()
          
          const result = ipValidator.validateIpv4Address(address)

          expect(result).toBe(false)
          
       } )
    })

     describe('Misc false teat cases', () => {
 
       it.each([  {
        address:"0.0.0.0"
      },
        {
        address:"255.255.255.255"
      },
        {
        address:"10.0.1"
      },
      {
        address:"192.168.01.1"
      },
       {
        address:"192.168.1.00"
      }
    ])('$address should return false',({address})=>{
             
          const ipValidator = new IpValidator()
          
          const result = ipValidator.validateIpv4Address(address)

          expect(result).toBe(false)
          
       } )
    })
    
})
