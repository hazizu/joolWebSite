import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jool-solution-item',
  templateUrl: './jool-solution-item.component.html',
  styleUrls: ['./jool-solution-item.component.scss']
})
export class JoolSolutionItemComponent {
  @Input() libelle?:string
  @Input() subLibelle?:string
  @Input() imageHover?:string

}
