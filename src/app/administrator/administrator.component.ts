import { Component, OnInit } from '@angular/core';
import { Count } from '../shared/models/count.model';
import { InternService } from '../shared/services/intern.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent  implements OnInit{

  count!: Count;

  ngOnInit(): void {
    
    this.getQuizandInternCount();
  }

  constructor(private internService: InternService){}

getQuizandInternCount(){
    this.internService.countInterns().subscribe(
      {
        next: (data) => this.count = data
      }
    )

}

}
