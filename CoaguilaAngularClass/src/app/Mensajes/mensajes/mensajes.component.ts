import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/servicio.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public cargando: boolean;
  public cita: string;
  public autor: string;
  public ocultarMsj: boolean;
  public boton: string;
  public ocultarBtn: boolean;
  public ocultarImagen: boolean;
  public ocultarImplementacion: boolean;
  constructor(private service: ServicioService) {
    this.ocultarMsj = true;
    this.boton = 'ocultar';
    this.ocultarBtn = true;
    this.ocultarImplementacion = true;
   }

  ngOnInit() {
    this.getCitas();
  }
  getCitas(){
    this.cargando = true;
    return this.service.getCitas()
    .subscribe( data => {
      this.cita = data.quote;
      this.autor = data.author;
      this.cargando = false;
      return data;
    });
  }
  ocultarMensaje(){
    this.ocultarMsj = !this.ocultarMsj;
  }
  ocultarBotonGM(){
    this.ocultarBtn = !this.ocultarBtn;
  }
  ocultarImage(){
    this.ocultarImagen = !this.ocultarImagen;
  }
  ocultarImp(){
    this.ocultarImplementacion = !this.ocultarImplementacion;
  }
}
