export default class IpValidator{

     
     public validateIpv4Address(address:string){
          

           const ipParts= this.splitIpAddress(address)

           if(ipParts.length!==4 ||ipParts.some( part => part.trim()==='')){
               throw new Error("Ip address has invalid structure : "+address)
           }

           if(ipParts[3]==='255' || ipParts[3]==='0'){
               return false
           }

           
           return true

     }

     private splitIpAddress(address:string){

          return address.split('.')
     }

     private isInvalidEnd(str:string){
          
         const invalidEnds =['255','0']

         if (invalidEnds.includes(srt))

     }



}