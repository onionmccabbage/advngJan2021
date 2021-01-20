import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// if we p;lan to use forms, we MUST import the FormsModule
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataComponent } from './data/data.component';
import { CustableComponent } from './custable/custable.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    DataComponent,
    CustableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // this now makes ngModel available within forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
