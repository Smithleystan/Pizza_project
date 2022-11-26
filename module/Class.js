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


class Panier {
    constructor(ref, qte, prixUnitaire, prix) {
        this.ref = ref
        this.qte = qte
        this.prixUnitaire = prixUnitaire
        this.prix = prix
    }
}

class Pizza {
    constructor(number, ref, prix) {
        this.number = number
        this.ref = ref
        this.prix = prix
    }
}

let pizzas = []

pizzas.push(new Pizza(1, "margerita", 10))
pizzas.push(new Pizza(2, "4 fromages", 12))
pizzas.push(new Pizza(3, "chevre miel", 8))
pizzas.push(new Pizza(4, "poulet ananas", 12))


export {Commande, Panier, Pizza, pizzas}
