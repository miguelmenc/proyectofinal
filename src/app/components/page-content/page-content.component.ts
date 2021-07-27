import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesservicesService } from 'src/app/shared/services/gamesservices.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {

  game: any = undefined;
  id: string = "";

  constructor(private route: ActivatedRoute, private gameService: GamesservicesService) {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    this.gameService.getGame(this.id).subscribe(data => {
      const minibio: any = data.data()
      
      // minibio.id = data.id
      this.game = minibio 
    })
   
  }

  ngOnInit(): void {
    this.loadOneGame()  
    window.scrollTo(0, 0) 
  }

  loadOneGame(){
    this.game = this.gameService.getGame(this.id);
  }

   
}
