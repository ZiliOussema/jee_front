import { Fournisseur } from "../fournisseur/fournisseur";
import { Produit } from "../Produit/produit";

export class Commande {
    id  :  number =0 ; 
    fournisseur : Fournisseur =  new Fournisseur ()  ;  
    produit : Produit = new Produit() ; 
    dateFourni : Date = new Date ()  ; 
    quantiteFourni :  number =0 ;  

}
