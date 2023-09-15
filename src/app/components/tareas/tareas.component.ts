import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas:Tarea[] = []
  nombreTarea = ''

  ngOnInit(): void {


  }

  agregarTarea():void{
    // crear objeto
    const tarea = new Tarea(this.nombreTarea,false)
    this.listTareas.push(tarea)
    this.nombreTarea = ''
  }

  eliminarTarea(indexTarea:number):void{
    this.listTareas = this.listTareas.filter((tarea, indice)=> indice !== indexTarea)
  }

  actualizarTarea(tarea:Tarea,indexTarea:number){
    this.listTareas[indexTarea].estado = !tarea.estado

  }

}
