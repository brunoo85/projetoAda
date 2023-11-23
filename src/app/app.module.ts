import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumarioComponent } from './components/sumario/sumario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { VantagensComponent } from './components/vantagens/vantagens.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SumarioComponent,
    PrincipalComponent,
    VantagensComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
