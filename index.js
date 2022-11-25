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
    constructor(id, nom, prix, panier) {
        this.id = id
        this.nom = nom
        this.prix = prix
        this.panier = panier

    }
    add(x) {
        this.panier.push(x)
    }


}

class Panier {
    constructor(ref, qte, prixUnitaire, prix) {
        this.ref = ref
        this.qte = qte
        this.prixUnitaire = prixUnitaire
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

    choix1 = Number(window.prompt('1 commmander \n 2 recuperer commande \n 3 Quitter'))
    priceTotal = 0
    if (choix1 === 1) {
        let nom = window.prompt('saisisser votre nom')
        newClient = (new Commande((Math.random()).toFixed(2) * 1000, nom, "", []))
        do {
            ChoixPizza = window.prompt('Choisissez la pizza \n 1  Trois  fromages \n 2 quartre Miel \n 3 Authentique raclette \n 4 Cheesy & veggi')
            let pizz = pizzas.find(pizza => pizza.id == ChoixPizza)
            qte = Number(window.prompt('Quel quantité voulez vous?'))
            price = qte * pizz.prix
            newClient.add(new Panier(pizz.nom, qte, pizz.prix, price))

            console.log(newClient.panier)
            continuer = Number(window.prompt('voulez vous encore commander \n 1 oui  \n 2 non'))
        } while (continuer !== 2)
        for (i = 0; i < newClient.panier.length; i++) {

            priceTotal = priceTotal + newClient.panier[i].prix
        }
        newClient.prix = priceTotal
        console.log(newClient)
        client.push(newClient)
        console.log(client)
        alert(`Le prix total de votre commande est de ${priceTotal}€`)

    } else if (choix1 === 2) {
        let number = Number(window.prompt('saisir le numéro de la commande'))
        let tab = client.find(clients => clients.id === number)
        console.table(tab)
        alert(`le prix total de la commande est ${tab.prix}`)

    }
} while (choix1 !== 3)



