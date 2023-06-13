export default class IpValidator{

     
     public validateIpv4Address(address:string){

           if(this.hasInvalidIpParts(address)){
               throw new Error("Ip address has invalid structure : "+address)
           }

           if(this.hasInvalidEnd(address)){
               return false
           }
           
           return true

     }

     private splitIpAddress(address:string){

          return address.split('.')
     }

     private hasInvalidEnd(address:string){

          const LAST_INDEX=3

          const ipParts= this.getIpParts(address)
          
         const invalidEnds =['255','0']

         return invalidEnds.includes(ipParts[LAST_INDEX])
     }

     private hasInvalidIpParts(address:string){

            const VALID_LENGTH = 4

            const ipParts= this.getIpParts(address)

            return ipParts.length!==VALID_LENGTH ||ipParts.some( part => part.trim()==='')

     }

     private getIpParts(address:string){
             const ipParts= this.splitIpAddress(address)
             return ipParts
     }



}