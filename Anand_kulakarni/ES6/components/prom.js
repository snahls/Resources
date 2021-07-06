const p1=Promise.resolve(4);
const p2=Promise.resolve(3);

function sum(a,b){
    return parseInt(a)+parseInt(b);
}

Promise.all([p1,p2]).then((value)=>{
    console.log(sum(...value));
});


