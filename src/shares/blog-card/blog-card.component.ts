import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() urlImages:string =''
  @Input() title:string = ''
  @Input() description:string = ''
  @Input() moreButton:string = ''

lire(){
  console.log('ok ok')
  
}


}

