const App = require("./App")

App.createUser("fauze@email.com", "Fauze Cavalari")
App.createUser("mariana@email.com", "Mariana Ferraz")

App.deposit("fauze@email.com", 100)

App.changeLoanFee(10)
App.takeLoan("mariana@email.com", 2000, 24)

console.log(App.findUser("fauze@email.com"))
console.log(App.findUser("fauze@email.com").account)

console.log(App.findUser("mariana@email.com"))
console.log(App.findUser("mariana@email.com").account)
console.log(App.findUser("mariana@email.com").account.loans[0].installments)