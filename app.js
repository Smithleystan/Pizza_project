class Commande {
    constructor(id, nom, panier, prix) {
        this.id = id
        this.nom = nom
        this.panier = panier
        this.prix = prix
    }
    add(x) {
        this.panier.push(x)
    }
}

class Pizza {
    constructor(number, ref, prix) {
        this.number = number
        this.ref = ref
        this.prix = prix
    }
}

class Pannier {
    constructor(ref, qte, prixUnitaire, prix) {
        this.ref = ref
        this.qte = qte
        this.prixUnitaire = prixUnitaire
        this.prix = prix
    }
}

let pizzas = []

pizzas.push(new Pizza(1, "margerita", 10))
pizzas.push(new Pizza(2, "4 fromages", 12))
pizzas.push(new Pizza(3, "chevre miel", 8))
pizzas.push(new Pizza(4, "poulet ananas", 12))


console.log(pizzas)

let choix1
let firstname
let id
let newClient
let choix2
let maPizza
let qte
let choix3
let prixTotal = 0
let clients = []





do {
    choix1 = Number(window.prompt('1 Commander \n 2 Rechercher commande \n 3 Quitter'))

    if (choix1 === 1) {
        firstname = window.prompt('Saisissez votre nom')
        id = (Math.random() * 1000).toFixed(0)
        newClient = new Commande(id, firstname, [])
        do {
            choix2 = Number(window.prompt(`Choisissez votre pizza. \n 1 Marguerita \n 2 Quatre fromage \n 3 Chevre miel \n 4 Poulet ananas `))
            maPizza = pizzas.find(pizza => pizza.number === choix2)
            qte = window.prompt('Quelle quantité voulez vous pour cette pizza')
            prix = qte * maPizza.prix
            newClient.add(new Pannier(maPizza.ref, qte, maPizza.prix, prix))
            console.log(newClient)
            choix3 = Number(window.prompt('voulez ajouter d\'autre pizza a votre panier ? \n 1 oui \n 2 non '))
        } while (choix3 !== 2)
        prixTotal = 0
        for (i = 0; i < newClient.panier.length; i++) {
            prixTotal = prixTotal + newClient.panier[i].prix
        }
        newClient.prix = prixTotal
        let confirmation = Number(window.prompt(`Le prix total de votre commande est de ${prixTotal}€ \n Voulez vous confirmer votre commande ? \n 1 oui \n non 2 `))
        confirmation === 1 ? clients.push(newClient) : alert('commande annulé')
        console.log(newClient)
        console.log(clients)


    }







} while (choix1 !== 3)