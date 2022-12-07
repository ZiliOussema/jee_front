import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit{
  public categories : Categorie[] | undefined ; 
  public deletedCategorie: Categorie =new Categorie()  ; 
  public editCategorie: Categorie =new Categorie()  ; 
  constructor (private categorieService: CategorieService) {
   }
   ngOnInit(): void {
      this.getCategorie() ;  
   }

  public getCategorie() : void
  {
    this.categorieService.getallCategorie().subscribe((response: Categorie[]) => {
      this.categories = response;
      this.categories.sort((a, b) => {  
        return a.id_categorie >= b.id_categorie
          ? 1
          : -1
      })
      }
    );      
  }
   public  onOpenModal  (categorie: Categorie |null , mode :  string):  void {
    const container  =  document.getElementById("main-container") ; 
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
    button.setAttribute('data-target', '#addModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editModal');
      this.editCategorie =categorie!  ; 
      }

      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteModal');
        this.deletedCategorie = categorie!;  
        }

      container?.appendChild(button) ; 
      button.click() ;  
    }

    public onAddCategorie (addForm : NgForm ): void {
      document.getElementById('btn_annuler_add')?.click() ; 
      this.categorieService.addCategorie(addForm.value).subscribe(
        (response : Categorie )=> {
          console.log(response) ; 
          this.getCategorie() ; 
          addForm.reset(); 
                 } 
      )
    }
    public onEditCategorie (categorie : Categorie): void {
      document.getElementById('btn_annuler_edit')?.click() ; 
      this.categorieService.updateCategorie(categorie).subscribe(
        (response: Categorie) => {
        console.log(response);
        this.getCategorie ();
        }
        );
    }

    public onDeleteCategorie (categorie_id: number): void {
      document.getElementById('btn_annuler_delete')?.click() ; 
      this.categorieService.deleteCategorie(categorie_id).subscribe(
      (response:void) => {
      console.log(response);
      this.getCategorie ();
      }
      );
    }


 
    


   }
