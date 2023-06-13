export default class IpValidator{

     public validateIpv4Address(address:string){
         
           const ipParts= this.splitIpAddress(address)

           if(ipParts.length!==4 ||ipParts.some( part => part.trim()==='')){
               return false
           }

          return true

     }

     private splitIpAddress(address:string){

          return address.split('.')
     }

}