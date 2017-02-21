import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers';
import { Router } from '@angular/router';
import { Dial } from './mocks';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { DialogContent, CustomModalContext  } from  '../driver_reg/dialog';
import { DialogContent2, CustomModalContext2  } from  '../driver_reg/dialog2';
import { DialogContent3, CustomModalContext3  } from  '../driver_reg/dialog3';
@Injectable()
export class PostService {
    constructor(private http: Http , private router: Router , public modal: Modal ) { }


 post_first(model:any)
 { let body= JSON.stringify(model); 

   this.http.post('https://destinys.mod.bz/driverreg/step_1', body, { headers: contentHeaders})
   .subscribe(response =>{
  
                            this.openCustom();

                                
       

   
   //alert(response.text());


     
     // this.router.navigate(['/second_page']);
   }, onerror => { 

 alert(onerror.text());
 this.router.navigate(['/DriverRegistration']);

   })
 }


  openCustom() { 
         return this.modal.open(DialogContent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
                 }
  openCustom2() { 
         return this.modal.open(DialogContent2,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
                 }
                  openCustom3() { 
         return this.modal.open(DialogContent3,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
                 }


  post_second(model:any)
 { 
   let body= JSON.stringify(model); 
   
   this.http.post('https://destinys.mod.bz/driverreg/step_2', body, { headers: contentHeaders})
   .subscribe(response =>{
   
    this.openCustom2();

  // alert(response.text());

    //  this.router.navigate(['/third_page']);
   }, onerror => { 

 alert(onerror.text());
 this.router.navigate(['/DriverRegistration']);

   })
 }

post_third(model:any)
{
let body= JSON.stringify(model); 
 this.http.post('https://destinys.mod.bz/driverreg/step_3', body, { headers: contentHeaders})
   .subscribe(response =>{
  
 this.openCustom3();
    // alert(response.text());
    // this.router.navigate(['/DriverRegistration']);
   }, onerror => { 

 alert(onerror.text());
 this.router.navigate(['/DriverRegistration']);

   })
}

get_Country_code() : Promise<Dial[]>
{

 return this.http.get('https://destinys.mod.bz/countrycodes')
                  .toPromise()
                  .then(res => <Dial[]> res.json(), this.handleError)
                  .then(data => {   return data; });
                  



}


 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}
  
      
