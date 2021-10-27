import { Pipe, PipeTransform } from '@angular/core';
import { SouraService } from 'src/app/shared/service/soura/soura.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(public s: SouraService) { }
  soura = this.s.s

  transform(arr = this.soura, filterTerm: any): unknown {
    return arr.filter(arr =>
     arr.name.toLocaleLowerCase().includes(filterTerm) ||
     arr.nameId.toLocaleLowerCase().includes(filterTerm)) 
  }

}
