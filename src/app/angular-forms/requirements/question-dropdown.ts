import { QuestionBase } from '../../angular-forms/requirements/question-base';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}