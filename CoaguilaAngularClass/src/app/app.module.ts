import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from 'src/servicio.service';
import { DirectivaDirective } from './directiva/directiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    DirectivaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
