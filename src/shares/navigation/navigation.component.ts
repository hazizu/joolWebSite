import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  selectedIndex?:number
  navList = [
    {
      libelle:'À propos',
      link:'/a-propos'
    },
    {
      libelle:'Produits',
      link:'/produits'
    },
    {
      libelle:'R&D',
      link:'/recherche-et-developpement'
    },
    {
      libelle:'Blog',
      link:'/blog'
    },
    {
      libelle:'Tarifs',
      link:'/tarifs'
    },
    {
      libelle:'Contacts',
      link:'/contacts'
    }
  ]
  constructor(public router:Router){

  }
  selectItem(index:number, libelle:string){
    this.selectedIndex = index
    switch(libelle){
      case 'À propos':
        this.router.navigateByUrl('/a-propos')
        break;
      case 'Produits':
        this.router.navigateByUrl('/produits')
        break;
      case 'R&D':
        this.router.navigateByUrl('/recherche-et-developpement')
        break;
      case 'Blog':
        this.router.navigateByUrl('/blog')
        break;
      case 'Tarifs':
        this.router.navigateByUrl('/tarifs');
        break;
      case 'Contacts':
        this.router.navigateByUrl('/contacts');
        break;

    }

  }

}
