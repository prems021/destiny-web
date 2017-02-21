import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routes';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import {PartnersComponent} from './partners/partners.component';
import { EnterpriseComponent} from './enterprise/enterprise.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DriverRegistrationComponent } from './driver_reg/driver_reg.component';
import {  DriverRegistrationComponent2 }   from './driver_reg/driver_reg.component';
import {  DriverRegistrationComponent3 }   from './driver_reg/driver_reg.component';
import { PostService } from './service/post.service';
import { EmailValidator } from 'ng-email-validation';
import { EmailValidators } from 'ng2-validators';
import { DatePickerModule } from 'ng2-datepicker';
import { DatePickerModule1 } from 'ng2-datepicker1';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { DialogContent } from './driver_reg/dialog';
import { DialogContent2 } from './driver_reg/dialog2';
import { DialogContent3 } from './driver_reg/dialog3';
@NgModule({
  declarations: [
    AppComponent,PartnersComponent,EnterpriseComponent,SidebarComponent,HomeComponent,FooterComponent,DriverRegistrationComponent2,DriverRegistrationComponent3,
    DriverRegistrationComponent,DialogContent,DialogContent2,DialogContent3
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,routing,DatePickerModule,DatePickerModule1,
    MaterialModule.forRoot(), ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [PostService,EmailValidator,EmailValidators,DriverRegistrationComponent],
  bootstrap: [AppComponent],
  entryComponents: [ DialogContent,DialogContent2,DialogContent3 ]
})
export class AppModule { }
