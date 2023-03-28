import { Component } from '@angular/core';
import { Count } from '../shared/models/count.model';
import { Intern } from '../shared/models/intern.model';


@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent {

  count!: Count;
  intern!: Intern;
  id!: number;
  tokenStorageService: any;

  getIntern() {
    this.intern = this.tokenStorageService.getUser();
    this.id  = this.intern.id!;
  }

}
