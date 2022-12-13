import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Laboratoire } from '../laboratoire';
import { LaboratoireService } from '../laboratoire.service';

@Component({
  selector: 'app-laboratoire-component',
  templateUrl: './laboratoire-component.component.html',
  styleUrls: ['./laboratoire-component.component.css']
})
export class LaboratoireComponentComponent implements OnInit {

    public laboratoires : Laboratoire[] | undefined ; 
    public deletedLaboratoire: Laboratoire =new Laboratoire()  ; 
    public editLaboratoire: Laboratoire =new Laboratoire()  ; 
    public test : boolean | undefined ; 
    constructor (private laboratoireService: LaboratoireService) {
     }
     ngOnInit(): void {
        this.getLaboratoire() ;  
        if(localStorage.getItem("CurrentUser")==="admin")
        {
          this.test =true; 
        }
        else this.test= false;   
     }
  
    public getLaboratoire() : void
    {
      this.laboratoireService.getallLaboratoire().subscribe((response: Laboratoire[]) => {
        this.laboratoires = response;
        this.laboratoires.sort((a, b) => {  
          return a.id_labo >= b.id_labo
            ? 1
            : -1
        })
        }
      );      
    }
     public  onOpenModal  (laboratoire: Laboratoire |null , mode :  string):  void {
      const container  =  document.getElementById("main-container") ; 
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
      button.setAttribute('data-target', '#addModallab');
      }
      if (mode === 'edit') {
        button.setAttribute('data-target', '#editModallab');
        this.editLaboratoire =laboratoire!  ; 
        }
  
        if (mode === 'delete') {
          button.setAttribute('data-target', '#deleteModallab');
          this.deletedLaboratoire = laboratoire!;  
          }
  
        container?.appendChild(button) ; 
        button.click() ;  
      }
  
      public onAddLaboratoire (addFormlab : NgForm ): void {
        document.getElementById('btn_annuler_add_lab')?.click() ; 
        this.laboratoireService.addLaboratoire(addFormlab.value).subscribe(
          (response : Laboratoire )=> {
            console.log(response) ; 
            this.getLaboratoire() ; 
            addFormlab.reset(); 
                   } 
        )
      }
      public onEditLaboratoire (laboratoire : Laboratoire): void {
        document.getElementById('btn_annuler_edit_lab')?.click() ; 
        this.laboratoireService.updateLaboratoire(laboratoire).subscribe(
          (response: Laboratoire) => {
          console.log(response);
          this.getLaboratoire ();
          }
          );
      }
  
      public onDeleteLaboratoire (laboratoire_id: number): void {
        document.getElementById('btn_annuler_delete_lab')?.click() ; 
        this.laboratoireService.deleteLaboratoire(laboratoire_id).subscribe(
        (response:void) => {
        console.log(response);
        this.getLaboratoire ();
        }
        );
      }
  
  
   
      
  
  
     }
  
