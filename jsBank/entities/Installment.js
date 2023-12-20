module.exports = class Installments{
    constructor(value, qtd){
        this.value = value
        this.qtd = qtd
        this.status = 'pending'
    }
}