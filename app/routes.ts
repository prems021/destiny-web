import { Route, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PartnersComponent} from './partners/partners.component';
import {EnterpriseComponent} from './enterprise/enterprise.component';
import { HomeComponent } from './home/home.component';
import { DriverRegistrationComponent } from './driver_reg/driver_reg.component';
import { DriverRegistrationComponent2 } from './driver_reg/driver_reg.component';
import { DriverRegistrationComponent3 } from './driver_reg/driver_reg.component';
export const routes: Route[] = [
          { path: '', component: HomeComponent},
          { path: 'partners', component: PartnersComponent },
          { path: 'enterprise', component: EnterpriseComponent},
          { path: 'DriverRegistration',component:DriverRegistrationComponent},
          { path: 'second_page',component: DriverRegistrationComponent2          },
          { path: 'third_page', component: DriverRegistrationComponent3          }
          
      
      

 
    
  
  
      
    
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });