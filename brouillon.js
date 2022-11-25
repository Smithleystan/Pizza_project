
class Test{
    constructor (ID, nom, prix, pannier){
        this.ID=ID
        this.nom=nom
        this.prix=prix
        this.pannier=pannier
        
    }
    test(x){
        this.pannier.push(x)
    }
 
}


class panier{
    constructor(ref, qte, prix){
        this.ref=ref
        this.qte=qte
        this.prix=prix

    }

}

let tableau = [] 

let stan = new Test (1 ,"stanislas","",[])
tableau.push(stan)




stan.test(new panier("3 fromages", 2, 24))
stan.test(new panier("4 miel", 1, 8))
stan.test(new panier("Cheezy & veggi", 1, 13))


console.table(stan)

console.table(stan.pannier)


console.log(stan.pannier.length)
let total = 0
for(i=0; i<stan.pannier.length;i++ ){
    total = total+stan.pannier[i].prix

}
console.log(total)
stan.prix = total
console.log(stan)
