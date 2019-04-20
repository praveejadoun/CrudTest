import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule,Routes } from '@angular/router'
import { FormsModule} from '@angular/forms'
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard-service';
import { ListOptionsComponent } from './options/list-options.component';
import { DisplayOptionComponent } from './options/display-option.component';
import {OptionService} from './options/option.service'

const appRoutes :Routes=[
  { path:'listOptions',component:ListOptionsComponent},
  { path:'list',component:ListEmployeesComponent},
  
  { path:'create', component:CreateEmployeeComponent,canDeactivate:[CreateEmployeeCanDeactivateGuardService]},
  { path:'', redirectTo:'/list',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    ListOptionsComponent,
    DisplayOptionComponent,
    
    
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
   ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,OptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
