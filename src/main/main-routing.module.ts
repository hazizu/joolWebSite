import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { AProposComponent } from "./a-propos/a-propos.component";
import { ProduitsComponent } from "./produits/produits.component";
import { RechercheEtDevComponent } from "./recherche-et-dev/recherche-et-dev.component";
import { BlogComponent } from "./blog/blog.component";
import { TarifsComponent } from "./tarifs/tarifs.component";
import { ContactsComponent } from "./contacts/contacts.component";





const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path:'accueil', component:HomeComponent
            },
            {
                path:'a-propos', component:AProposComponent
            },
            {
                path:'produits', component:ProduitsComponent
            },
            {
                path:'recherche-et-developpement', component:RechercheEtDevComponent
            },
            {
                path:'blog', component:BlogComponent
            },
            {
                path:'tarifs', component:TarifsComponent
            },
            {
                path:'contacts', component:ContactsComponent
            },
            { path: '', redirectTo: "accueil", pathMatch: "full" },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRountingModule { }