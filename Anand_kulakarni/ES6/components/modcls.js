class Account{
    constructor(id,name,balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
    }

    getBal(){
        return this.balance;
    }
}

class SavingAccount extends Account{
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest=interest;
    }

    getBal(){
        return super.getBal()+this.interest;
    }
}

class CurrentAccount extends Account{
    constructor(id,name,balance,cash_credit){
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }

    getBal(){
        return super.getBal()+this.cash_credit;
    }
}

let s1=new SavingAccount(1,"Tom",1000,630);
let s2= new SavingAccount(21,"Tomy",6000,220);
let s3= new SavingAccount(31,"Tommy",4000,125);
let c1= new CurrentAccount(11,"Toy",2000,1009);
let c2= new CurrentAccount(12,"Toym",3000,1009);
let c3= new CurrentAccount(13,"Toom",5000,1007);

let allAcc=[s1,s2,s3,c1,c2,c3];

let totalbal = getTotalbal(allAcc);
console.log(totalbal);

function getTotalbal(allAcc){
        let tot=0;
        allAcc.forEach((acc)=>{
            tot=tot+acc.getBal();
        })
        return tot;
}
