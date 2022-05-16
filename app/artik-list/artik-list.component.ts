import { Component, OnInit } from '@angular/core';
import { ArtikPersonnalised } from '../models/artik.model';
import { ArtikService } from '../service/artik.service';


@Component({
  selector: 'app-artik-list',
  templateUrl: './artik-list.component.html',
  styleUrls: ['./artik-list.component.css']
})
export class ArtikListComponent implements OnInit {

  artikListObjects!: ArtikPersonnalised[];
  constructor(private artikService: ArtikService ) { }

  ngOnInit(): void {
    this.artikListObjects= this.artikService.getAllArtikConsultants();
  }
}
 