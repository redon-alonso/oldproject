import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcadeComponent } from './views/arcade/arcade.component';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { ListComponent } from './views/list/list.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { AportaComponent } from './views/aporta/aporta.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'info', component: InfoComponent },
  { path: 'arcade/:id', component: ArcadeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'aporta', component: AportaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
