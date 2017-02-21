import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext2 extends BSModalContext {
  public num1: number;
  public num2: number;
}
@Component({
  selector: 'dailog-content',
  styles: [`
        .custom-modal-container {
            padding: 50px;
        }

        .custom-modal-header {
            padding: 15px;
        }
    `],
   template: `
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1> Destiny Driver Registration  Step2 Successful </h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
               
                        
                         	<button type="button" class="btn btn-danger btn-block btn-lg"  (click) ="firststep()" > Step3 >> </button>
               
            </div>
        </div>`
})

export class DialogContent2 implements CloseGuard, ModalComponent<CustomModalContext2> {

     context: CustomModalContext2;
public wrongAnswer: boolean;
constructor( private router: Router, public dialog: DialogRef<CustomModalContext2>) {
    this.context = dialog.context;
 
    dialog.setCloseGuard(this);
  }
onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
  firststep()
  {
      
     // this.dialog.close();
     // this.dialog.overlay.defaultViewContainer.clear();
       this.dialog.close();
       this.router.navigate(['/third_page']);
       window.location.reload();
  }


}