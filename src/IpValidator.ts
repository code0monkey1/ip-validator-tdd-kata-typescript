export default class IpValidator{

     
     public validateIpv4Address(address:string){
          

           const ipParts= this.splitIpAddress(address)

           if(ipParts.length!==4 ||ipParts.some( part => part.trim()==='')){
               throw new Error("Ip address has invalid structure : "+address)
           }

           if(this.isInvalidEnd(ipParts[3])){
               return false
           }

           
           return true

     }

     private splitIpAddress(address:string){

          return address.split('.')
     }

     private isInvalidEnd(str:string){
          
         const invalidEnds =['255','0']

         return invalidEnds.includes(str)

     }



}