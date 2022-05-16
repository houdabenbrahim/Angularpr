import { Component, Input, OnInit } from '@angular/core';
import { ArtikPersonnalised } from '../models/artik.model';
import { ArtikService } from '../service/artik.service';

@Component({
  selector: 'app-artik',
  templateUrl: './artik.component.html',
  styleUrls: ['./artik.component.css']
})
export class ArtikComponent implements OnInit {
  @Input() artikPersonnalised!: ArtikPersonnalised;

  buttontext!: string;
  //ici on peut ajouter un constructeur pour injecter le service de get block by id , cad si on veut modifier chaque block tt seul meme s'il sont lié dans un tableau et ont le meme type 

  constructor(private artikService: ArtikService){}
  ngOnInit() {
    this.buttontext='like';
  }
//ici dans tt les methodes crées on fait appel à la methode crée dans le service 

// la méthode onfollow est appelé par le service
  onfollow(){
    this.buttontext='like'
    this.artikService.blocksIds(this.artikPersonnalised.id);
  }
  //la methode onlike est appelé sans service 
  onlike(){
    if(this.buttontext==='like'){
      this.artikPersonnalised.like--;
      this.buttontext='dislike'
    } else {
      this.artikPersonnalised.like--;
      this.buttontext='like';
      
    }
  }
}
