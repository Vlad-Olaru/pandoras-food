import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

