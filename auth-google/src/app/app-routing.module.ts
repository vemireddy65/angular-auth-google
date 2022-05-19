import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  

 
  {path:'',pathMatch:'full',redirectTo:'auth'},
  {
    path:'auth',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,canActivate: [AuthGuard]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
     ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
