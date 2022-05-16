import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtikListComponent } from "./artik-list/artik-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes =[
    {path: 'artikroute', component: ArtikListComponent},
    {path: '', component: LandingPageComponent}
];

// decorateur 
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}