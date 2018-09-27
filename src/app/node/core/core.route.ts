
import {Routes } from '@angular/router';
import { NewuiComponent } from './components/newui/newui.component';
import { EmployeeComponent } from './components/employee/employee.component';
export const ROUTES: Routes = [
{
	    path: 'newui', component: NewuiComponent
},
{
	    path: 'employee', component: EmployeeComponent
},
];

