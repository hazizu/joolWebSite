import { Component } from '@angular/core';

@Component({
  selector: 'app-patnaire',
  templateUrl: './patnaire.component.html',
  styleUrls: ['./patnaire.component.scss']
})
export class PatnaireComponent {
  config: any;

  items = [
    { image: './../../assets/SVG/pat1.png', title: 'Slide 1', link: 'https://example.com/slide1' },
    { image: './../../assets/SVG/pat2.png', title: 'Slide 2', link: 'https://example.com/slide2' },
    { image: './../../assets/SVG/pat3.png', title: 'Slide 3', link: 'https://example.com/slide3' },
    { image: './../../assets/SVG/pat4.png', title: 'Slide 4', link: 'https://example.com/slide4' }
  ];

  constructor(){
    this.config = {
   
      showArrows: true,
      showIndicators: true,
      pauseOnHover: true
    };

  }

 

}
