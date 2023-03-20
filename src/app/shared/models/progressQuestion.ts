export interface ProgressQuestion {
  id?: number;
  wording?: string;
  maxDurationInSeconds?:number;
  numberOfQuestionsLeft:number;
  answers?: [
    {
      id?:number;
      wording?:string;
      correct?:boolean;
    }
  ];
}
