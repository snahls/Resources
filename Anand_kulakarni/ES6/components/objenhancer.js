function testEnhancer(){
    var Order={
        id:1,
        title:"ES",
        price:300,
        
        printOrder(){
            console.log("ID is "+this.id+" Title is "+this.title+" Price is "+this.price);
        },
        getPrice()
        {
            console.log("Order Price is "+this.price);
        }
    }
  
    Order.printOrder();
    Order.getPrice();

    var testOrder = Object.assign({},Order);
    console.log(testOrder);
}
module.exports=testEnhancer