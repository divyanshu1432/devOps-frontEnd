import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserHeaderComponent } from '../../user-header/user-header.component';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { FeedbackComponent } from './feedback/feedback.component';

const userRoute: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'query',
    component: QueryComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    QueryComponent,
    FeedbackComponent,
  ],

  imports: [CommonModule, RouterModule.forChild(userRoute)],
})
export class UserModule {}
