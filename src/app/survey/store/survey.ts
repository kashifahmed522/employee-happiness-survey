// Questionair
export interface Questionair {
  id: number;
  question: string;
}
export interface QuestionairState {
  questionair: Questionair[];
}

export interface SurveyForm {
  id: number;
  name: string;
  type: string;
  controlName: string;
  value: [
    {
      id: number,
      name: string;
      value: string;
    }
  ]
}
export interface SurveyFormState {
  SurveyForm: SurveyForm[];
}
