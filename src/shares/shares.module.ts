import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { JoolSolutionItemComponent } from './jool-solution-item/jool-solution-item.component';
import { ButtonComponent } from './button/button.component';
import { ProuctImageLinkComponent } from './prouct-image-link/prouct-image-link.component';
import { PatnaireComponent } from './patnaire/patnaire.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




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

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    NavigationComponent,
    JoolSolutionItemComponent,
    ButtonComponent,
    ProuctImageLinkComponent,
    PatnaireComponent,
    BlogCardComponent,
    FooterComponent,
    InputComponent

  ]
})
export class SharesModule { }
