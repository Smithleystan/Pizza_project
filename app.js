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

