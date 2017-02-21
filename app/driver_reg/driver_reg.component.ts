import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Driver } from '../service/mocks';
import { Driver_reg2 } from '../service/mocks';
import { Driver_reg3 } from '../service/mocks';
import { EmailValidator } from 'ng-email-validation';
import {EmailValidators} from 'ng2-validators'
import { PostService } from '../service/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import {UniversalValidators} from 'ng2-validators';
import { Driver_reg3a } from '../service/mocks';
import { Dial } from '../service/mocks';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Router } from '@angular/router';



@Component({
              selector: 'app-driver-reg',
              templateUrl: 'driver_reg.component.html',
              styleUrls: ['driver_reg.component.css'],
           
          })


export class DriverRegistrationComponent implements OnInit {
  
                                                                  myForm: FormGroup;
                                                                  formvalue : Driver;
                                                                  todo = new Driver('','','','','','','');
                                                                  email : FormControl;
                                                                  ph : string = '+91';
                                                                  codes : Dial[];
                                                                      constructor( private fb: FormBuilder ,private router: Router, private ps: PostService) {  this.email = new FormControl("",Validators.compose([Validators.required, EmailValidator.emailValidator ])) }                                    
                                                                          ngOnInit() 
                                                                       {    

                                                                         this.get_co_code();

                                                                          this.myForm = this.fb.group
                                                                          ({            
                                                                                firstname: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
                                                                                lastname: ['',[<any>Validators.required, <any>Validators.minLength(1)]],
                                                                                email: this.email,
                                                                                countrycode: ['+91'],
                                                                                phonenumber: ['',Validators.pattern('[0-9]{10}')], 
                                                                                city: [''],
                                                                                ref_code:[''] 
                                                                          });                                                                              
                                                                        }

                                                            firststep()
                                                                 { 
                                                                      this.todo = this.myForm.value;  
                                                                      this.ph = this.todo.countrycode;
                                                                      console.log('code',this.ph);                                                                
                                                                      this.ph= this.ph.concat(this.todo.phonenumber);
                                                                      localStorage.setItem('currentUserphonenumber',  this.ph);
                                                                      this.myForm.patchValue({phonenumber: this.ph  })
                                                                      this.formvalue = this.myForm.value;
                                                                      this.ps.post_first(this.formvalue);
                                                                }

                                                                get_co_code() : void {
                                                                                      this.ps.get_Country_code().then(parsedata=> this.codes = parsedata )
      
                                                                                     }
                                                               
                                                                
                                                                                     

                                                         } 

@Component({  
                selector: 'app-driver-reg2',
                templateUrl: 'driver_reg.component2.html',
                styleUrls: ['driver_reg.component.css']
           })

export class DriverRegistrationComponent2 implements OnInit
{

    myForm: FormGroup;
    formvalue: Driver_reg2;
    phonenumber : FormControl;
    todo = new Driver_reg2('','','','','','');
    ph : string = '';
           constructor(private fb: FormBuilder ,private router: Router, private ps: PostService , private phi: DriverRegistrationComponent  ) { }

                              ngOnInit()
                                  {   this.myForm = this.fb.group({                             
                                                                    
                                                                                    car_year:['', [<any>Validators.compose([<any>Validators.required, <any>Validators.required, <any>Validators.minLength(2) , <any>Validators.maxLength(4)])  ]  ],
                                                                                    car_company: ['',[<any>Validators.required, <any>Validators.minLength(2)]],
                                                                                    car_model: ['',[<any>Validators.required, <any>Validators.minLength(2)]],
                                                                                    car_ofdoors : ['', [<any>Validators.compose([<any>Validators.required, <any>Validators.maxLength(3)]), <any>Validators.pattern('[0-9]')]],
                                                                                    car_color: ['',[<any>Validators.required , Validators.minLength(3)]], 
                                                                                
                                                                });


                                 }

                                   secondstep()
                                     { 
                                          this.ph = localStorage.getItem('currentUserphonenumber');
                                          this.todo = this.myForm.value;
                                          this.todo.phonenumber = this.ph;
                                          this.ps.post_second(this.todo);
                                     }


}

@Component({
  
                selector: 'app-driver-reg3',
                templateUrl: 'driver_reg.component3.html',
                styleUrls: ['driver_reg.component.css']
          })

export class DriverRegistrationComponent3 implements OnInit
{

    myForm: FormGroup;
    formvalue: Driver_reg3;
    phonenumber : FormControl;
    todo = new Driver_reg3a('','','','','','','','','','','','','','');
    ph : string = '';
           constructor(private fb: FormBuilder , private ps: PostService , private phi: DriverRegistrationComponent  ) { }

 ngOnInit() {   this.myForm = this.fb.group({                             
                                               
                                                              legal_firstname:['', [<any>Validators.compose([<any>Validators.required, <any>Validators.minLength(3) , <any>Validators.maxLength(20)])  ]  ],
                                                              middle_name : [''], 
                                                              legal_lastname:['', [<any>Validators.compose([<any>Validators.required, <any>Validators.required, <any>Validators.minLength(1) , <any>Validators.maxLength(20)])  ]  ],
                                                              ssn: ['',[<any>Validators.compose( [ <any>UniversalValidators.isNumber(), <any>Validators.minLength(9) ,<any>UniversalValidators.maxLength(9), <any>Validators.required  ]) ] ],   
                                                              dob: ['',[Validators.required]],
                                                              license_num:['',[<any>Validators.compose( [<any>Validators.minLength(12) , <any>UniversalValidators.maxLength(18)   ]) ] ],
                                                              license_state:['',[<any>Validators.compose([<any>Validators.minLength(2), <any>UniversalValidators.maxLength(18), <any>Validators.required]) ] ],
                                                              license_expire :  ['',[Validators.required]],
                                                              res_address_1:['',[<any>Validators.required,Validators.minLength(3)]],
                                                              res_address_2:[''],
                                                              res_city:['',<any>Validators.minLength(3)],
                                                              res_state:['',<any>Validators.minLength(3)],
                                                              res_zipcode: ['',[<any>Validators.compose( [ <any>UniversalValidators.isNumber(), <any>Validators.minLength(5) ,<any>UniversalValidators.maxLength(5), <any>Validators.required  ]) ] ] 

                                           });

             }
                       
                       
                         thirdstep()
                                     { 
                                          this.ph = localStorage.getItem('currentUserphonenumber');
                                          console.log('phonenumber step 3',this.ph);
                                          this.todo = this.myForm.value;
                                          this.todo.phonenumber = this.ph;
                                          console.log('todo step 3',this.todo);
                                          this.ps.post_third(this.todo);
                                         
                                     }
                        

}