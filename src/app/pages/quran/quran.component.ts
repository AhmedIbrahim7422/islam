import { Component, OnInit } from '@angular/core';
import { SouraService } from 'src/app/shared/service/soura/soura.service';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss']
})
export class QuranComponent implements OnInit {

  constructor(private s: SouraService) { }
soura = this.s.s;

  ngOnInit(): void {
  }

}
