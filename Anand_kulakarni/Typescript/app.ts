class Account{
    id:number;name:string;balance:number;
    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }

    getBal():number{
        return this.balance;
    }
}

class SavingAccount extends Account{
    interest:number;
    constructor(id:number,name:string,balance:number,interest:number){
        super(id,name,balance);
        this.interest=interest;
    }

    getBal(){
        return super.getBal()+this.interest;
    }
}

class CurrentAccount extends Account{
    cash_credit:number;
    constructor(id:number,name:string,balance:number,cash_credit:number){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }

    getBal(){
        return super.getBal()+this.cash_credit;
    }
}

let s1=new SavingAccount(1,"A",1000,630);
let s2= new SavingAccount(21,"B",6000,220);
let s3= new SavingAccount(31,"C",4000,125);
let c1= new CurrentAccount(11,"D",2000,1009);
let c2= new CurrentAccount(12,"E",3000,1009);
let c3= new CurrentAccount(13,"F",5000,1007);

let allAcc:[any,any,any,any,any,any]
allAcc=[s1,s2,s3,c1,c2,c3];

let totalbal = getTotalbal(allAcc);
console.log(`Total balance is ${totalbal}`);

function getTotalbal(allAcc:any){
        let tot=0;
        allAcc.forEach((acc:any)=>{
            tot=tot+acc.getBal();
        })
        return tot;
}

interface Printable{
    elements:number;
    print:()=>void
}

let circle:Printable = {
    elements:100,
    print:()=>console.log("Circle Prints", circle.elements)
}

let employee:Printable = {
    elements:10,
    print:()=>console.log("Employee Prints", employee.elements)
}

function printAll(obj:any){
    obj.print();
}

printAll(circle);
printAll(employee);

