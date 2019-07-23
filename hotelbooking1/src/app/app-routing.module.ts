import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from 'src/home/home.component';
import { HotelsComponent } from 'src/hotels/hotels.component';
import { UserComponent } from 'src/user/user.component';
import { AboutComponent } from 'src/about/about.component';
import { ErrorComponent } from "src/Error/Error.component";
import { MovieComponent } from "src/movie/movie.component";
//import {  BangaloreComponent } from "src/Bangalore/Bangalore.component";
import { RegComponent } from "src/reg/reg.component";
const routes: Routes = [
  { path:'home' , component : HomeComponent },
  { path:'hotels' , component : HotelsComponent },
  { path:'user' , component : UserComponent },
  { path:'about' , component : AboutComponent },
  { path:'movie' , component : MovieComponent },
  //{ path:'bangalore' , component : BangaloreComponent },
   { path:'reg' , component : RegComponent },
  
  { path:'' , component : HomeComponent },
  { path:'**' , component : ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
