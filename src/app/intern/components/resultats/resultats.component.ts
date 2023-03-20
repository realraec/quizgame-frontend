import { Component, OnInit } from '@angular/core';
import { Progresses } from 'src/app/shared/models/progressesSuper.model';
import { AnswerService } from 'src/app/shared/services/answer.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit{
  listResultats!: Progresses;
  constructor(private resultatsService: AnswerService){}

  ngOnInit(): void {
    this.resultatsService.getProgresses(2).subscribe({
      next: ((data: Progresses) => {
        this.listResultats = data;
        console.log(this.listResultats);

      })
    })
  }

}
