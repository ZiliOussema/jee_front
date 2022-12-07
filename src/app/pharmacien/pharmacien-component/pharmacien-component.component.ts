import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacien as pharmacien } from '../pharmacien';
import { PharmacienService as pharmacienService } from '../pharmacien.service';
@Component({
  selector: 'app-pharmacien-component',
  templateUrl: './pharmacien-component.component.html',
  styleUrls: ['./pharmacien-component.component.css']
})
export class PharmacienComponentComponent implements OnInit {

  public pharmaciens : pharmacien[] | undefined ; 
  public deletedPharmacien: pharmacien =new pharmacien()  ; 
  public editPharmacien: pharmacien =new pharmacien()  ; 
  constructor (private pharmacienService: pharmacienService) {
   }
   ngOnInit(): void {
      this.getPharmacien() ;  
   }

  public getPharmacien() : void
  {
    this.pharmacienService.getAllPharmaciens().subscribe((response: pharmacien[]) => {
      this.pharmaciens = response;
      this.pharmaciens.sort((a, b) => {  
        return a.id_phar >= b.id_phar
          ? 1
          : -1
      })
      console.log('ph =',response)
      }
    );      
  }
   public  onOpenModalfour  (pharmacien: pharmacien |null , mode :  string):  void {
    const container  =  document.getElementById("main-containerfour") ; 
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
    button.setAttribute('data-target', '#addModalfour');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editModalfour');
      this.editPharmacien =pharmacien!  ; 
      }

      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteModalfour');
        this.deletedPharmacien = pharmacien!;  
        }

      container?.appendChild(button) ; 
      button.click() ;  
    }

    public onAddPharmacien (addFormfour : NgForm ): void {
      document.getElementById('btn_annuler_add_four')?.click() ; 
      this.pharmacienService.addPharmacien(addFormfour.value).subscribe(
        (response : pharmacien )=> {
          console.log(response) ; 
          this.getPharmacien() ; 
          addFormfour.reset(); 
                 } 
      )
    }
    public onEditPharmacien (pharmacien : pharmacien): void {
      document.getElementById('btn_annuler_edit_four')?.click() ; 
      this.pharmacienService.updatePharmacien(pharmacien).subscribe(
        (response: pharmacien) => {
        console.log(response);
        this.getPharmacien ();
        }
        );
    }

    public onDeletePharmacien (pharmacien_id: number): void {
      document.getElementById('btn_annuler_delete_four')?.click() ; 
      this.pharmacienService.deletePharmacien(pharmacien_id).subscribe(
      (response:void) => {
      console.log(response);
      this.getPharmacien ();
      }
      );
    }

}
