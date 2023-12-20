module.exports = class Account {
    #balance
    //#transfer
    //#deposit
    //#loan

    constructor(user){
        this.owner = user
        this.#balance = balance
        this.transfers = []
        this.deposits = []
        this.loan = []
    }

    get balance(){
        return this.#balance
    }

    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(newLoan){
        this.#balance += newLoan.value
        this.loan.push(newLoan)
    }

    addTransfer(transfer){
        if(transfer.userReceiver.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.userSender.email === this.owner.email){
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}