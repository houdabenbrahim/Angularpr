import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  emailInput!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.emailInput);
  }

}
