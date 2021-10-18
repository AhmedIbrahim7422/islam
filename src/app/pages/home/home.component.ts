import { PhotosService } from './../../shared/service/photos.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { GhawatService } from 'src/app/shared/service/ghzwat/ghawat.service';
import { ShabaService } from 'src/app/shared/service/shaba/shaba.service';
import { PersonService } from 'src/app/shared/service/person/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private photos: PhotosService, private gh: GhawatService, private sh: ShabaService, private pr: PersonService) { }

basmalla = this.photos.basmalla;
g = this.gh.g;
s = this.sh.s;
p = this.pr.p;
  ngOnInit(): void {
  }

}
