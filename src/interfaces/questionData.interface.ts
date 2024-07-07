export interface dataType {
  nextQuestion: string;
  answer: string;
  exampleAnswer?: [
    { content: string },
    { content: string },
    { content: string }
  ];
  status: string;
}
