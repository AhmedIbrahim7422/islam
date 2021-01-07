import { PhotosService } from './../../shared/service/photos.service';
import { Component, OnInit } from '@angular/core';
import { GhawatService } from 'src/app/shared/service/ghzwat/ghawat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private photos: PhotosService, private gh: GhawatService) { }
basmalla = this.photos.basmalla;
g = this.gh.g
  ngOnInit(): void {
  }

}
