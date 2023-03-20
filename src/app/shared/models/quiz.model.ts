export interface Quiz {
  id?: number;
  title?: string;
  summary?: string;
  state?: string;
  questionsIds: string[];
}
