import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/service/person/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private pe: PersonService) { }
p = this.pe.p;
  ngOnInit(): void {
  }

}
