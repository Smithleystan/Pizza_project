class Pizza {
    constructor(id, nom, prix) {
        this.id = id
        this.nom = nom
        this.prix = prix
    }

}


let pizzas = []

pizzas.push(new Pizza("1", "3 fromages", 12))
pizzas.push(new Pizza("2", "4 Miel", 8))
pizzas.push(new Pizza("3", "Authentique raclette", 12))
pizzas.push(new Pizza("4", "Cheesy & veggi", 13))


class Commande {
    constructor(ID, nom, prix, pannier) {
        this.ID = ID
        this.nom = nom
        this.prix = prix
        this.pannier = pannier

    }
    add(x) {
        this.pannier.push(x)
    }
    test(y) {
        console.log(`${this.nom}, ${y}`)
    }

}

class Panier {
    constructor(ref, qte, prix) {
        this.ref = ref
        this.qte = qte
        this.prix = prix

    }

}

let choix1
let ChoixPizza
let client = []
let qte
let priceTotal = 0
let newClient


do {

    choix1 = Number(window.prompt('1 commmander \n 2 Quitter'))

    if (choix1 === 1) {
        let nom = window.prompt('saisisser votre nom')
        newClient = (new Commande(1, nom, "", []))
        console.log(newClient)
        do {
            ChoixPizza = window.prompt('Choisissez la pizza \n 1  Trois  fromages \n 2 quartre Miel \n 3 Authentique raclette \n 4 Cheesy & veggi')
            let pizz = pizzas.find(pizza => pizza.id == ChoixPizza)
            console.log(pizz)
            qte = Number(window.prompt('Quel quantité voulez vous?'))
            price = qte * pizz.prix
            newClient.add(new Panier(pizz.nom, qte, price))


            // console.log(priceTotal)






            // commande.push(new Commande(Math.random(), pizz.nom, pizz.prix))
            console.log(newClient.pannier)
            continuer = Number(window.prompt('voulez vous encore commander \n 1 oui  \n 2 non'))
        } while (continuer !== 2)
        for (i = 0; i < newClient.pannier.length; i++) {

            priceTotal = priceTotal + newClient.pannier[i].prix
        }
        newClient.prix = priceTotal
        console.log(newClient)
        client.push(newClient)
        console.log(client)

    }
} while (choix1 !== 2)



