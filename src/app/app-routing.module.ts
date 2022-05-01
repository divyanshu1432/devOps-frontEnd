import { FeedbackComponent } from './feedback/feedback.component';
import { QueryUserComponent } from '../query-user/query-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppComponent } from './app.component';
import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  // { path: "", component:AppComponent },
  { path: 'admin', component: AdminPanelComponent },
  {
    path: 'new-adhar',
    component: NewUserComponent,
  },
  {
    path: 'edit-adhar',
    component: EditUserComponent,
  },
  {
    path: 'queries',
    component: QueryUserComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  { path: '', component: LoginComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
