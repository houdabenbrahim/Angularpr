import { Injectable } from "@angular/core";
import { ArtikListComponent } from "../artik-list/artik-list.component";
import { ArtikPersonnalised } from "../models/artik.model";


@Injectable({
    providedIn: 'root'
})

export class ArtikService{
    artikListObjects: ArtikPersonnalised[] = [
        {
          id: 1,
          titre: 'Artik Logo',
          description:'Artik Consulting est une société de conseil technologique qui accompagne les grandes entreprises dans leurs projets de transformation SI.',
          imageUrl: 'https://www.congres-dsi.com/wp-content/uploads/logo-Artik-Haute-R%C3%A9solution.jpg',
          date: new Date(),
          like: 140
        },
          {
          id: 2,
          titre: 'Artik interns',
          description:'Artik chaque année accueille des stagiaires pour les former en nouvelles technologie de bid data et microservices. En effet, monter en compétences en ces outils primordiaux leur permetteront dagire en tant qeu consultants avec nos grands clients dans le marché du big data.',
          imageUrl: 'https://artik-consulting.com/wp-content/uploads/2019/06/Artik-Consulting-2000-05.jpg',
          date: new Date(),
          like: 50
        },
        {
          id: 3,
          titre: 'Artik employees',
          description:'Fort d’une équipe d’Architectes SI très expérimentés, ayant travaillé sur des projets de transformation significatifs, Artik a la capacité d’accompagner ses clients dans la transformation de leur SI avec pragmatisme et efficacité.',
          imageUrl: 'https://artik-consulting.com/wp-content/uploads/2019/06/Artik-Consulting-2000-19-e1573424028563.jpg',
          date: new Date(),
          like: 76
        }
      ]


      getAllArtikConsultants(): ArtikPersonnalised[] {
          return this.artikListObjects;
      }
      getBlockById(blockId: number): ArtikPersonnalised{
        const artikListObject =this.artikListObjects.find(artikListObject => artikListObject.id ===blockId);
        if (!artikListObject){
          throw new Error('Block not found');
        } else {
          return artikListObject;
        }

      }

// on a codé blocksIds first , just to searate the blocks by their ids, and the now we're coding the getblocksById upthere

      blocksIds(blockId: number): void{
        const artikListObject= this.artikListObjects.find(artikListObject => artikListObject.id === blockId);
        if (artikListObject){
          artikListObject.like++;
        }else {
          throw new Error('block not found');
        }
      }
}