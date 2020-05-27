import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const UserRoutes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(UserRoutes)],
  declarations: [LoginComponent],
})
export class UserModule {}
