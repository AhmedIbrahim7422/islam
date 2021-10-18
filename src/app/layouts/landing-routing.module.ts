import { QuranComponent } from './../pages/quran/quran.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FriendsComponent } from '../pages/friends/friends.component';
import { HadithsComponent } from '../pages/hadiths/hadiths.component';
import { PersonComponent } from '../pages/person/person.component';
import { WarsComponent } from '../pages/wars/wars.component';
import { SouraComponent } from '../pages/quran/soura/soura.component';

const routes: Routes = [{
  path: '', component: LandingComponent,
  children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'الصحابة', component: FriendsComponent},
    {path: 'احاديث', component: HadithsComponent},
    {path: 'شخصيات_اسلامية', component: PersonComponent},
    {path: 'قران', component: QuranComponent},
    {path: 'غزوات', component: WarsComponent},
    {path: 'سورة', component:SouraComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
