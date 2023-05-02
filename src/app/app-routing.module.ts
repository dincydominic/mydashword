import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  //path:http.//localhost4200:/dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
   path:'employee',component:EmployeeComponent
  }, {
    path:'gallery',component:GalleryComponent
   }, {
    path:'contacts',component:ContactsComponent
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
