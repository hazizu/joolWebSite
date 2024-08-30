import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-jool-solution-item',
  templateUrl: './new-jool-solution-item.component.html',
  styleUrls: ['./new-jool-solution-item.component.scss']
})
export class NewJoolSolutionItemComponent {
  @Input() solution:string = ''

}
