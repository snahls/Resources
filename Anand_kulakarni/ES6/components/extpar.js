function testExtpar(){
let add = (a,b=2) => {
    console.log(a,b);
}
var userFriends=(username,...userfriends)=>{
    console.log(username,userfriends);

}

// function printCapitalNames(al){
//     var ac = al.map(v=> {return v.toUpperCase()});
//     return ac;
// }

function printCapitalNames(p,q,r,s,t){
    console.log(p.toUpperCase());
    console.log(q.toUpperCase());
    console.log(r.toUpperCase());
    console.log(s.toUpperCase());
    console.log(t.toUpperCase());
}

var names=["abc","def","ghi","jkl","mno"];

//console.log(printCapitalNames(names));

printCapitalNames(...names);
userFriends("Sravya",["A","B","C","D"]);
add(1,5)
}

module.exports=testExtpar

