export default class IpValidator{

     
     public validateIpv4Address(address:string){

           if(
               this.hasInvalidShape(address) ||
                this.hasInvalidSegments(address)||
               this.hasInvalidEnd(address) 
              
            ) {
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

     private hasInvalidShape(address:string){

            const VALID_PARTS_LENGTH = 4

            const ipParts= this.getIpParts(address)

            return ipParts.length!==VALID_PARTS_LENGTH ||ipParts.some( part => part.trim()==='')

     }

     private getIpParts(address:string){
             const ipParts= this.splitIpAddress(address)

             return ipParts
     }

     private hasInvalidSegments(address:string){
   
          const ipParts= this.getIpParts(address)
          
          ipParts.forEach( part =>{
     
               if(Number.isNaN(Number(part))){
                    return true
               }
               console.log("part",part)
               console.log("number to string",Number(part).toString())
              if(Number(part).toString()!==part){
                return true
              }

          })

          return false
     }



}