import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},                        
  {path:'login',component: LoginComponent},    
  
  {path: 'employees',component:EmployeeListComponent},
  {path: 'add',component:CreateEmployeeComponent},
  {path: 'update/:id',component:UpdateEmployeeComponent},
  {path: 'details/:id',component:EmployeeDetailsComponent}
 
  
                   
 // {path:'admin',component: AdminComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

