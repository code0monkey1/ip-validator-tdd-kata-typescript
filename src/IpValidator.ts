export default class IpValidator{

     public validateIpv4Address(address:string){
         
           const ipParts= this.splitIpAddress(address)

           if(ipParts.length!==4 ||ipParts.some( part => part.trim()==='')){
               throw new Error("Ip address has invalid structure : "+address)
           }
           
          return true

     }

     private splitIpAddress(address:string){

          return address.split('.')
     }

}