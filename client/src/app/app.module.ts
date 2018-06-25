import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesServiceService } from "./movies-service.service";
import { Movies17Component } from './movies17/movies17.component';
import { Movies18Component } from './movies18/movies18.component';


const ROUTES : Routes =[{path:"Movies17",component:Movies17Component},
                        {path:"Movies18",component:Movies18Component}];

@NgModule({
  declarations: [
    AppComponent,
    Movies17Component,
    Movies18Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
