import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { AppComponent } from './app.component';
import { SidenavholderComponent } from './sidenavholder/sidenavholder.component';
import { HeaderComponent } from './header/header.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventComponent } from './event/event.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqComponent } from './faq/faq.component';
import { PriceComponent } from './price/price.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { VenueComponent } from './venue/venue.component';
import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    SidenavholderComponent,
    HeaderComponent,
    HomebannerComponent,
    AboutusComponent,
    EventComponent,
    SpeakersComponent,
    TestimonialsComponent,
    ScheduleComponent,
    FaqComponent,
    PriceComponent,
    GalleryComponent,
    SponsorsComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
