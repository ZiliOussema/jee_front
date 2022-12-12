import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacien } from '../pharmacien';
import { PharmacienService } from '../pharmacien.service';

@Component({
  selector: 'app-pharmacien-component',
  templateUrl: './pharmacien-component.component.html',
  styleUrls: ['./pharmacien-component.component.css']
})
export class PharmacienComponentComponent implements OnInit {

  public pharmaciens : Pharmacien [] | undefined ; 
  public deletedPharmacien: Pharmacien  =new Pharmacien()  ; 
  public editPharmacien: Pharmacien =new Pharmacien()  ; 
  constructor (private pharmacienService: PharmacienService) {
   }
   ngOnInit(): void {
      this.getPharmacien() ;  
   }

  public getPharmacien() : void
  {
    this.pharmacienService.getAllPharmaciens().subscribe((response: Pharmacien[]) => {
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
   public  onOpenModalphar  (pharmacien: Pharmacien |null , mode :  string):  void {
    const container  =  document.getElementById("main-containerphar") ; 
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
    button.setAttribute('data-target', '#addModalphar');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editModalphar');
      this.editPharmacien =pharmacien!  ; 
      }

      if (mode === 'delete') {
        button.setAttribute('data-target', '#deleteModalphar');
        this.deletedPharmacien = pharmacien!;  
        }

      container?.appendChild(button) ; 
      button.click() ;  
    }

    public onAddPharmacien (addFormfour : NgForm ): void {
      document.getElementById('btn_annuler_add_phar')?.click() ; 
      this.pharmacienService.addPharmacien(addFormfour.value).subscribe(
        (response : Pharmacien )=> {
          console.log(response) ; 
          this.getPharmacien() ; 
          addFormfour.reset(); 
                 } 
      )
    }
    public onEditPharmacien (pharmacien : Pharmacien): void {
      document.getElementById('btn_annuler_edit_phar')?.click() ; 
      this.pharmacienService.updatePharmacien(pharmacien).subscribe(
        (response: Pharmacien) => {
        console.log(response);
        this.getPharmacien ();
        }
        );
    }

    public onDeletePharmacien (pharmacien_id: number): void {
      document.getElementById('btn_annuler_delete_phar')?.click() ; 
      this.pharmacienService.deletePharmacien(pharmacien_id).subscribe(
      (response:void) => {
      console.log(response);
      this.getPharmacien ();
      }
      );
    }
}
