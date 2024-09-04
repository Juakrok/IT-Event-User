import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  actividades = [
    {
      titulo: 'Seminario de Redes',
      descripcion: 'Aprende sobre las últimas tecnologías en redes.',
      imagen: 'assets/Imagenes/Taller3.png', 
    },
    {
      titulo: 'Taller de Programación',
      descripcion: 'Un taller práctico sobre lenguajes de programación modernos.',
      imagen: 'assets/Imagenes/Taller1.png', 
    },
    {
      titulo: 'Actividad de Ciberseguridad',
      descripcion: 'Mejora tus habilidades en ciberseguridad.',
      imagen: 'assets/Imagenes/Taller2.png', 
    },
    
  ];

  constructor() {}

  ngOnInit() {}

  verDetalles(item: any) {
    console.log('Detalles del ítem:', item);
  }
}
