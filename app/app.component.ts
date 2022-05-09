import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artik Consulting App';
  Showme:boolean=false
  hide:boolean=false
  ngOnInit(){

  }
  Showtag(){
    this.Showme=!this.Showme;
  }
  result(){
    this.hide=!this.hide;
  }
 
}
