import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mainMenu: {
    defaulOptions: Array<any>,
    accessLink: Array<any>,
    
  } = { defaulOptions: [], accessLink: [] }; 
  customOptions: Array<any> = []
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.menuDinamic(); 
  }

  menuDinamic() {
    this.mainMenu.defaulOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        link: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        link: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }]; 
        this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
    
  }

}
