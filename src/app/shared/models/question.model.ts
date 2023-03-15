export interface Question{
    id?: number;
    wording? : string;
    maxDurationInSeconds?: number;
    quizId: number,
    answersIds: number []
}