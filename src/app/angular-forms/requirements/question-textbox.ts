import { QuestionBase } from '../../angular-forms/requirements/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}