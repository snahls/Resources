var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.getBal = function () {
        return this.balance;
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingAccount.prototype.getBal = function () {
        return _super.prototype.getBal.call(this) + this.interest;
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cash_credit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    CurrentAccount.prototype.getBal = function () {
        return _super.prototype.getBal.call(this) + this.cash_credit;
    };
    return CurrentAccount;
}(Account));
var s1 = new SavingAccount(1, "A", 1000, 630);
var s2 = new SavingAccount(21, "B", 6000, 220);
var s3 = new SavingAccount(31, "C", 4000, 125);
var c1 = new CurrentAccount(11, "D", 2000, 1009);
var c2 = new CurrentAccount(12, "E", 3000, 1009);
var c3 = new CurrentAccount(13, "F", 5000, 1007);
var allAcc;
allAcc = [s1, s2, s3, c1, c2, c3];
var totalbal = getTotalbal(allAcc);
console.log("Total balance is " + totalbal);
function getTotalbal(allAcc) {
    var tot = 0;
    allAcc.forEach(function (acc) {
        tot = tot + acc.getBal();
    });
    return tot;
}
var circle = {
    elements: 100,
    print: function () { return console.log("Circle Prints", circle.elements); }
};
var employee = {
    elements: 10,
    print: function () { return console.log("Employee Prints", employee.elements); }
};
function printAll(obj) {
    obj.print();
}
printAll(circle);
printAll(employee);
