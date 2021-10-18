import { SouraService } from '../../../shared/service/soura/soura.service';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/shared/service/photos.service';

@Component({
  selector: 'app-soura',
  templateUrl: './soura.component.html',
  styleUrls: ['./soura.component.scss']
})
export class SouraComponent implements OnInit {

  constructor(private basm: PhotosService, private s: SouraService) { }
bsm = this.basm.basmalla;

soura = this.s.s;

n = location.href.slice(location.href.lastIndexOf('id=') + 3);
y = +this.n;


b: string

  ngOnInit(): void {
    if(this.y<10){
      this.b = "00"+this.y
    } else if( this.y < 100){
       this.b = '0'+this.y

    } else {
     this.b= this.y.toString();
    }
  }

}
