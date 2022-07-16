import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { ContatoComponent } from "./contato/contato.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
  { pathMatch: 'full', path: '', component: HomeComponent },
  { pathMatch: 'full', path: 'restaurantes', component: RestaurantesComponent },
  { pathMatch: 'full', path: 'diversao', component: DiversaoComponent },
  { pathMatch: 'full', path: 'contato', component: ContatoComponent },
  { pathMatch: 'full', path: 'sobre', component: SobreComponent },
]