function testTempl(){
   var laptop={
       "model":"i710g",
       "deskno":12,
       "name":"sravya",
       ticket(){
           console.log(`Problem with laptop with model ${this.model}, desk number ${this.deskno} and My name is ${this.name}`);
       }
   }
   laptop.ticket();    
}
    
module.exports=testTempl
    
