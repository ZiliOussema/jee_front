import { Categorie } from "../categorie/categorie";
import { Laboratoire } from "../laboratoire/laboratoire";

export class Produit {
id_prd : number =0  ; 
lib_prd : string="" ; 
description_prd: string="" ; 
prix_prd : number=0 ; 
prix_livr :  number =0 ; 
dateAjout_prd : Date = new Date();
laboratoire : Laboratoire  =  new Laboratoire ()  ; 
categorie: Categorie  =  new Categorie ()  ; 
}
