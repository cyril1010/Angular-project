import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'addproduct',component: AddproductComponent},
        {path:'login',component: LoginComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



