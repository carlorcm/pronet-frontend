import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PrincipalService } from './services/principal.service';
import { MonedasComponent } from './components/monedas/monedas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PrincipalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
