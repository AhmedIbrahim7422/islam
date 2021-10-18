import { GhawatService } from 'src/app/shared/service/ghzwat/ghawat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wars',
  templateUrl: './wars.component.html',
  styleUrls: ['./wars.component.scss']
})
export class WarsComponent implements OnInit {

  constructor(private gh: GhawatService) { }
  g = this.gh.g;

  ngOnInit(): void {
  }

}
