import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-patnaire',
  templateUrl: './patnaire.component.html',
  styleUrls: ['./patnaire.component.scss']
})
export class PatnaireComponent {
  config: any;
  getScreenWidth:any

  images = [
    { path: './../../assets/SVG/pat4.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat1.png', title: 'Slide 1', link: 'https://example.com/slide1' },
    { path: './../../assets/SVG/pat2.png', title: 'Slide 2', link: 'https://example.com/slide2' },
    { path: './../../assets/SVG/pat3.png', title: 'Slide 3', link: 'https://example.com/slide3' },
    { path: './../../assets/SVG/pat5.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat6.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat7.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat8.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat9.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat10.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat11.png', title: 'Slide 4', link: 'https://example.com/slide4' },
    { path: './../../assets/SVG/pat12.png', title: 'Slide 4', link: 'https://example.com/slide4' }
  ];

  constructor(){ 
    this.config = {
   
      showArrows: true,
      showIndicators: true,
      pauseOnHover: true
    };

  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

 

}
