import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// you will need to generate these components!
// ng g c ...
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path:'about', component:AboutComponent},
  { path:'contact', component:ContactComponent},
  { path:'home', component:HomeComponent},
  { path: '**', component: PageNotFoundComponent } // the catch-all MUST be the last one!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
