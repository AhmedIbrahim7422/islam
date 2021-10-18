import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { QuranComponent } from './quran/quran.component';
import { HadithsComponent } from './hadiths/hadiths.component';
import { WarsComponent } from './wars/wars.component';
import { FriendsComponent } from './friends/friends.component';
import { PersonComponent } from './person/person.component';
import { SouraComponent } from './quran/soura/soura.component';


@NgModule({
  declarations: [ HomeComponent, QuranComponent, HadithsComponent,  WarsComponent, FriendsComponent, PersonComponent, SouraComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
