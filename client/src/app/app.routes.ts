import { Routes } from '@angular/router';

import { canActivateAuth } from './auth/access.guard';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShopComponent } from './pages/shop/shop.component';



export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product/:id', component: ItemComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [canActivateAuth]},
      {path: 'shop', component: ShopComponent},
    ],
  },
];
