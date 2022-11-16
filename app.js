const readline = require('readline')
const {stdin: input, stdout: output} = require('process')
const { pipeline } = require('stream')
const rl = readline.createInterface(input, output)

let i =0


function Pizza (id, nom, prix){
    this.id = id
    this.nom = nom
    this.prix = prix
}


let pizza = []

pizza.push(new Pizza ("1", "3 fromages","12"))
pizza.push(new Pizza ("2", "4 Miel","8"))
pizza.push(new Pizza ("3","Authentique raclette", "12"))
pizza.push(new Pizza ("4", "Cheesy & veggi","13"))

console.log(pizza)

function Pannier (nom, prenom, namePizza, qte){
    this.nom = nom
    this.prenom = prenom
    this.namePizza = namePizza
    this.qte = qte
}


rl.question('choisissez votre pizza  : \n', choix=>{
    while(choix != pizza[i].id){
        i++
    }
     
    console.log(pizza[i].nom)
   

})

