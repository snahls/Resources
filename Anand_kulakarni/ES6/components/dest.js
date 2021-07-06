function testDest(){
    let arr=[1,4,9,16];
    let [,,z,]=arr;
    console.log("Third value is:",z);

    let org={
        name:"Sravya",
        address:{
            city:"Guntur",
            state:"AP",
            pincode:522007
        }}

        let {address:{pincode}}=org;
        console.log("Pincode:",pincode);
 }
     
 module.exports=testDest
     
 