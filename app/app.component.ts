import { Component, OnInit } from '@angular/core';
import { ArtikPersonnalised } from './models/artik.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  objet1!: ArtikPersonnalised;
  objet2!: ArtikPersonnalised;
  objet3!: ArtikPersonnalised;

  ngOnInit() {
    this.objet1 = {
      titre: 'Artik Logo',
      description:'Artik Consulting est une société de conseil technologique qui accompagne les grandes entreprises dans leurs projets de transformation SI.',
      imageUrl: 'https://www.congres-dsi.com/wp-content/uploads/logo-Artik-Haute-R%C3%A9solution.jpg',
      date: new Date(),
      like: 140
    };
    this.objet2 = {
      titre: 'Artik interns',
      description:'Artik chaque année accueille des stagiaires pour les former en nouvelles technologie de bid data et microservices. En effet, monter en compétences en ces outils primordiaux leur permetteront dagire en tant qeu consultants avec nos grands clients dans le marché du big data.',
      imageUrl: 'https://artik-consulting.com/wp-content/uploads/2019/06/Artik-Consulting-2000-05.jpg',
      date: new Date(),
      like: 50
    };
    this.objet3 = {
      titre: 'Artik employees',
      description:'Fort d’une équipe d’Architectes SI très expérimentés, ayant travaillé sur des projets de transformation significatifs, Artik a la capacité d’accompagner ses clients dans la transformation de leur SI avec pragmatisme et efficacité.',
      imageUrl: 'https://artik-consulting.com/wp-content/uploads/2019/06/Artik-Consulting-2000-19-e1573424028563.jpg',
      date: new Date(),
      like: 76
    };
      
    }
    

  }


