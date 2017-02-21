import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext3 extends BSModalContext {
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
                    <h1> Destiny Driver Registration Completed </h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
               
                        
                         	<button type="button" class="btn btn-danger btn-block btn-lg"  (click) ="firststep()" > OK </button>
               
            </div>
        </div>`
})

export class DialogContent3 implements CloseGuard, ModalComponent<CustomModalContext3> {

     context: CustomModalContext3;
public wrongAnswer: boolean;
constructor( private router: Router, public dialog: DialogRef<CustomModalContext3>) {
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
       this.router.navigate(['']);
       window.location.reload();
  }


}