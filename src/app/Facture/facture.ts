import { Fournisseur } from "../fournisseur/fournisseur";
import { Produit } from "../Produit/produit";

export class Facture {
    id: number  =0 ; 
    dateFact : Date  =  new Date () ; 
    totalHT: number =0 ; 
    totalTVA : number =0 ; 
    totalTTC:  number =0 ; 
    fournisseur :  Fournisseur =  new Fournisseur() ; 
    produit : Produit = new Produit () ; 
}
