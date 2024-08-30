import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { JoolSolutionItemComponent } from './jool-solution-item/jool-solution-item.component';
import { ButtonComponent } from './button/button.component';
import { ProuctImageLinkComponent } from './prouct-image-link/prouct-image-link.component';
import { PatnaireComponent } from './patnaire/patnaire.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewJoolSolutionItemComponent } from './new-jool-solution-item/new-jool-solution-item.component';
import { AgronomistsChoiceComponent } from './agronomists-choice/agronomists-choice.component';
import { LottieModule } from 'ngx-lottie';




@NgModule({
  declarations: [
    NavigationComponent,
    JoolSolutionItemComponent,
    ButtonComponent,
    ProuctImageLinkComponent,
    PatnaireComponent,
    BlogCardComponent,
    FooterComponent,
    InputComponent,
    NewJoolSolutionItemComponent,
    AgronomistsChoiceComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule,
  
  ], 
  exports:[
    NavigationComponent,
    JoolSolutionItemComponent,
    ButtonComponent,
    ProuctImageLinkComponent,
    PatnaireComponent, 
    BlogCardComponent,
    FooterComponent,
    InputComponent,
    NewJoolSolutionItemComponent,
    AgronomistsChoiceComponent

  ]
})
export class SharesModule { }
