import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { ListComponent } from './views/list/list.component';
import { ArcadeComponent } from './views/arcade/arcade.component';
import { NavegadorComponent } from './component/navegador/navegador.component';
import { JumboComponent } from './component/jumbo/jumbo.component';
import { ArcadeCardComponent } from './component/arcade-card/arcade-card.component';
import { PopupComponent } from './component/popup/popup.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { AportaComponent } from './views/aporta/aporta.component';
import { MarcoComponent } from './component/marco/marco.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ListComponent,
    ArcadeComponent,
    NavegadorComponent,
    JumboComponent,
    ArcadeCardComponent,
    PopupComponent,
    NoticiasComponent,
    AportaComponent,
    MarcoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
