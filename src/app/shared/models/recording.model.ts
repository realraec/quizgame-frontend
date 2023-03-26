export interface Recording {
  id?: number;
  questionId?: number;
  progressId?: number;
  pickedAnswersIds?: number[];
  check?: boolean;
  name?: string;
}
