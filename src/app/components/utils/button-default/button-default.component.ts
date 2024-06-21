import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss'],
})
export class ButtonDefaultComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  @Input()
  theme:
    'primary-blue' |
    'primary-blue-disabled' |
    'secondary-blue' |
    'primary-white' |
    'primary-white-bordered' |
    'disabled' |
    'white' |
    'blue' | undefined

  @Input()
  value: string = '';

  @Input()
  imageValue: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  imageButton() {
    if (this.imageValue != '') {
      return true;
    }
    return false;
  }

  spanButtonImg() {
    if (this.imageValue) {
      return 'spanButtonImage';
    }
    return '';
  }

  checkButtonStyle() {
    switch (this.theme) {
      case 'disabled':
        return 'button-disabled';

      case 'primary-blue':
        return 'button-primary-blue';

      case 'secondary-blue':
        return 'button-secondary-blue';

      case 'primary-blue-disabled':
        return 'button-primary-blue-disabled';

      case 'white':
        return 'button-white';

      default:
        return 'button-primary-blue';
    }
  }

  click() {
    this.clickEvent.emit();
  }
}
