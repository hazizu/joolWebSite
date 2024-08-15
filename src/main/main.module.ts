import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ProduitsComponent } from './produits/produits.component';
import { RechercheEtDevComponent } from './recherche-et-dev/recherche-et-dev.component';
import { BlogComponent } from './blog/blog.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainRountingModule } from './main-routing.module';
import { SharesModule } from 'src/shares/shares.module';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AProposComponent,
    ProduitsComponent,
    RechercheEtDevComponent,
    BlogComponent,
    TarifsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    MainRountingModule,
    SharesModule,
  ]
})
export class MainModule { }
