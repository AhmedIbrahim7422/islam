import { Component, OnInit } from '@angular/core';
import { ShabaService } from 'src/app/shared/service/shaba/shaba.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor( private sh: ShabaService) { }
s = this.sh.s;
  ngOnInit(): void {
  }

}
