import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from 'src/app/shared/models/resultat.model';
// import { Progresses } from 'src/app/shared/models/progressesSuper.model';
// import { Resultat } from 'src/app/shared/models/resultat.model';
import { AnswerService } from 'src/app/shared/services/answer.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit{
  scoreTotal!: number
  listResultats!: Resultat;
  idResultat!: number
  constructor(private resultatsService: AnswerService, private route: ActivatedRoute){
    this.idResultat = +this.route.snapshot.params['id']
  }

  ngOnInit(): void {

    this.resultatsService.getResultat(this.idResultat).subscribe({
      next: ((data: Resultat) => {
        this.listResultats = data;
        console.log(this.listResultats);
        if (this.listResultats?.score && this.listResultats.recordsIds.length > 0) {
          this.scoreTotal = (this.listResultats.score)/(this.listResultats.recordsIds.length/100);
          console.log("**********************************");

          console.log(this.scoreTotal);

        }

      })
    })

  }


}
