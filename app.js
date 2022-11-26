import { Commande, Panier, pizzas, } from "./module/Class.js"

let root = document.querySelector('.root')




let choix1
let firstname
let id = 0
let newClient
let choix2
let maPizza
let qte
let choix3
let prixTotal = 0
let clients = []
let recherche
let maCommande
let prix = 0





do {
    choix1 = Number(window.prompt('1 Commander \n 2 Rechercher commande \n 3 Quitter'))

    if (choix1 === 1) {
        firstname = window.prompt('Saisissez votre nom')
        id = (Math.random() * 1000).toFixed(0)
        newClient = new Commande(id, firstname, [])
        do {
            choix2 = Number(window.prompt(`Choisissez votre pizza. \n 1 Marguerita \n 2 Quatre fromage \n 3 Chevre miel \n 4 Poulet ananas `))
            maPizza = pizzas.find(pizza => pizza.number === choix2)
            qte = Number(window.prompt('Quelle quantité voulez vous pour cette pizza'))
            prix = qte * maPizza.prix
            newClient.add(new Panier(maPizza.ref, qte, maPizza.prix, prix))
            console.log(newClient)
            choix3 = Number(window.prompt('voulez ajouter d\'autre pizza a votre panier ? \n 1 oui \n 2 non '))
        } while (choix3 !== 2)
        prixTotal = 0
        for (let i = 0; i < newClient.panier.length; i++) {
            prixTotal = prixTotal + newClient.panier[i].prix
        }
        newClient.prix = prixTotal
        let confirmation = Number(window.prompt(`Le prix total de votre commande est de ${prixTotal}€ \n Voulez vous confirmer votre commande ? \n 1 oui \n 2 non  `))
        confirmation === 1 ? clients.push(newClient) : alert('commande annulé')
        console.log(newClient)
        console.log(clients)


    } else if (choix1 === 2) {
        recherche = Number(window.prompt('saisissez le numéro de votre commande'))
        maCommande = clients.find(client => client.id == recherche)
        console.table(maCommande)
        maCommande ? alert(`Le prix de la commande est de ${maCommande.prix}€`) : ""
        root.innerHTML = `Le prix de la commande est de ${maCommande.prix}€`
    }


} while (choix1 !== 3)
