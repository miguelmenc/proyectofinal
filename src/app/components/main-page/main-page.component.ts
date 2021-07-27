import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Games } from 'src/app/shared/models/game';
import { GamesservicesService } from 'src/app/shared/services/gamesservices.service';
import { PageEvent } from '@angular/material/paginator';

type busqueda = {
  nombre: string;
};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  busqueda: busqueda = {
    nombre: '',
  };

  misGames: Array<Games> = [];
  gamesBuscador: Array<Games> = [];

  page: any = 1;

  constructor(
    private firestore: AngularFirestore,
    private gamesService: GamesservicesService
  ) {
  }

  ngOnInit(): void {
    this.loadAllGames();
  }

  // Función para importar la base de datos a una variable llamada misGames
  loadAllGames() {
    this.gamesService.readGames().subscribe((data:any) => {
      
     
      data.forEach((doc: any) => {
        let myGame: Games = doc.data();
        myGame.uid = doc.id;
        this.misGames.push(myGame);
        this.gamesBuscador.push(myGame);
      });
    });
  }

  buscar(){
    var busqueda = this.busqueda.nombre
    this.gamesBuscador = [];
    console.log(busqueda)
    const filtered = this.misGames.filter(x => x.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    this.gamesBuscador = filtered
    console.log(filtered)
   
    /*
    this.misGames.forEach((doc: Games) => {
    }) 
    */
  }


  search = new FormControl('');

  // paginacion
  pageSlice = this.misGames.slice(0, 3);

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.misGames.length) {
      endIndex = this.misGames.length;
    }
    this.pageSlice = this.misGames.slice(startIndex, endIndex);
  }
}
