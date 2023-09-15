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

    const listaGuardada = localStorage.getItem('listaTareas');
    if (listaGuardada) {
      this.listTareas = JSON.parse(listaGuardada);
    }


  }

  agregarTarea():void{
    // crear objeto
    const tarea = new Tarea(this.nombreTarea,false)
    this.listTareas.push(tarea)
    this.nombreTarea = ''
    localStorage.setItem('listaTareas', JSON.stringify(this.listTareas));
  }

  eliminarTarea(indexTarea:number):void{
    this.listTareas = this.listTareas.filter((tarea, indice)=> indice !== indexTarea)

    localStorage.setItem('listaTareas', JSON.stringify(this.listTareas));
  }

  actualizarTarea(tarea:Tarea,indexTarea:number){
    this.listTareas[indexTarea].estado = !tarea.estado

    localStorage.setItem('listaTareas', JSON.stringify(this.listTareas));
  }

}
