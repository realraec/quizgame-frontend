import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-dariane',
  templateUrl: './file-dariane.component.html',
  styleUrls: ['./file-dariane.component.scss']
})
export class FileDarianeComponent implements OnInit{
  @Input() link!: any[] | string | null | undefined
  @Input() names!: string | string[]
  @Input() disabled!: string;

  formattedBreadcrumb!: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
