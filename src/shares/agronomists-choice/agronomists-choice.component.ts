import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-agronomists-choice',
  templateUrl: './agronomists-choice.component.html',
  styleUrls: ['./agronomists-choice.component.scss']
})
export class AgronomistsChoiceComponent {
  options: AnimationOptions = {    
    path: './../../assets/lottie/world.json'  
  };  

}
