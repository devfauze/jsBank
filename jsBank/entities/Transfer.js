module.exports = class Transfer {
    constructor(userSender, userReceiver, value){
        this.userSender = userSender
        this.userReceiver = userReceiver
        this.value = value
        this.dateCreate = new Date()
    }
}

