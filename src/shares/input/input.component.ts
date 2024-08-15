import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent {
  @Input() controlName:string;
  @Input() inputType:string=''
  @Input() InputLibelle:string=''
  @Input() iconUrl:string = ''
  @Input () styles = {}


  constructor() { 
    this.controlName = '';
  }

}
