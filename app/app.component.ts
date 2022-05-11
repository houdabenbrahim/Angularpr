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
    this.objet1 =new ArtikPersonnalised(
      'Artik interns',
      'Artik chaque année accueille des stagiaires pour les former en nouvelles technologie de bid data et microservices. En effet, monter en compétences en ces outils primordiaux leur permetteront dagire en tant qeu consultants avec nos grands clients dans le marché du big data.',
      'data:image/jpeg;base64,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',
      new Date(),
      0
    );
  }
}


