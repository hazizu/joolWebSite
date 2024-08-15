import { Component, ElementRef, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newsLetterForm:FormGroup
  @Input() scrollingUp:EventEmitter<any> = new EventEmitter<any>();

  socialItems = [
    {
      icon:'./../../assets/SVG/Facebook.svg'
    },
    {
      icon:'./../../assets/SVG/Insta (1).svg'
    },
    {
      icon:'./../../assets/SVG/LinkedIn.svg'
    },
    {
      icon:'./../../assets/SVG/Twitter.svg'
    },
    {
      icon:'./../../assets/SVG/Yt.svg'
    }
  ]

  constructor(private fb:FormBuilder){
    this.newsLetterForm = this.fb.group({
      'email':['', [Validators.required, Validators.email]]
    })
  }



  sendEmail(){
    if(this.newsLetterForm.valid){
      console.log(this.newsLetterForm.value)
    }
  }
  scrollUp(){
    this.scrollingUp.emit()
  }

  

}
