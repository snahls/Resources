function testArrows(){
/*var fbUser={
    "name":"Sravya",
    "friends":["Tom","Jerry","TOMJERRY"],
    printFriends(){
        var currentUser=this.name;
        this.friends.forEach(function(friend){
            console.log(currentUser, "is a friend of", friend);
        });
    }
}

var fbUseres6={
    "name":"Sravya1",
    "friends":["Tom1","Jerry1","TOMJERRY1"],
    printFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name, "is a friend of", friend);
        });
    }
}
fbUseres6.printFriends();
fbUser.printFriends();
*/

let names=['Tom','Ivan','Jerry'];
let namesObj= names.map(name=>({
    name, length:name.length
}));

console.log(namesObj);
}
module.exports=testArrows