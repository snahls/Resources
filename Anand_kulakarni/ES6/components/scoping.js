function testScope(){
    var y=90;
    if(y==90)
    {
        var x=20;
        //let x=20;
    }
    console.log('Var x is',x);   
}

module.exports=testScope