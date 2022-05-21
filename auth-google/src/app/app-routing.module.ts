import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [

  

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  { path: 'user', component: UserDashboardComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_USER'
    }
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
     ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
