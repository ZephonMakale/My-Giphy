import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ReactionComponent } from './reaction/reaction.component';
import { SoccerComponent } from './soccer/soccer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'reaction', component: ReactionComponent },
  { path: 'soccer', component: SoccerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EntertainmentComponent, HomeComponent, ReactionComponent, SoccerComponent ];
