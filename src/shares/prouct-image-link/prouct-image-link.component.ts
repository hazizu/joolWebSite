import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prouct-image-link',
  templateUrl: './prouct-image-link.component.html',
  styleUrls: ['./prouct-image-link.component.scss']
})
export class ProuctImageLinkComponent {
  @Input() urlImage?:string

}
