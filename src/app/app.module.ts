import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; // swiper@10
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog'; 

//calendario
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

// swiper@8
// import { SwiperModule } from 'swiper/angular';

//swiper@10.3.1 https://swiperjs.com/element
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { LoggedoutCardComponent } from './components/loggedout-card/loggedout-card.component';
import { LoggedinCardComponent } from './components/loggedin-card/loggedin-card.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { MisMazosComponent } from './pages/mis-mazos/mis-mazos.component';
import { ExploraComponent } from './pages/explora/explora.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { EventoComponent } from './pages/evento/evento.component';
import { ModalProfileComponent } from './components/modal-profile/modal-profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    CardInfoComponent,
    LandingPageComponent,
    LoggedoutCardComponent,
    LoggedinCardComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    ProfileComponent,
    CartasComponent,
    MisMazosComponent,
    ExploraComponent,
    CalendarioComponent,
    EventoComponent,
    ModalProfileComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // angular material
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
    
    //swiper@8
    // SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // swiper@10.3.1
})
export class AppModule { 
  constructor(){
    // register Swiper custom elements swiper@10.3.1
    register();
  }
}
