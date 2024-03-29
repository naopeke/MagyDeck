import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExploraComponent } from './pages/explora/explora.component';
import { AboutComponent } from './pages/about/about.component';
import { MisMazosComponent } from './pages/mis-mazos/mis-mazos.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventoComponent } from './pages/evento/evento.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'mis-mazos', component: MisMazosComponent},
  { path: 'explora', component:ExploraComponent},
  { path: 'about', component:AboutComponent},
  { path: 'cartas', component: CartasComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'evento', component: EventoComponent},
];

const routerOption: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'

}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
