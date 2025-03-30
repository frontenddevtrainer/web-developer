class BankAccount {

    constructor(accountHolder, accountType, hasDebitCard, hasOverdraft) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.hasDebitCard = hasDebitCard;
        this.hasOverdraft = hasOverdraft;
    }

}


// function BankAccount(accountHolder, accountType, hasDebitCard, hasOverdraft) {
//     // constructor
//     this.accountHolder = accountHolder;
//     this.accountType = accountType;
//     this.hasDebitCard = hasDebitCard;
//     this.hasOverdraft = hasOverdraft;
// }


var user1 = new BankAccount("John", "current", true, false);
var user2 = new BankAccount("Amit", "savings", true, true);

console.log(user2.accountHolder, user2.accountType);