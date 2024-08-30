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
      libelle:'Découvrez-nous',
      link:'/a-propos'
    },
    {
      libelle:'Nos solutions',
      link:'/produits'
    },
    {
      libelle:'Presse',
      link:'/recherche-et-developpement'
    },
    // {
    //   libelle:'Blog',
    //   link:'/blog'
    // },
    // {
    //   libelle:'Tarifs',
    //   link:'/tarifs'
    // },
    {
      libelle:'Contactez-nous',
      link:'/contacts'
    }
  ]
  constructor(public router:Router){

  }
  selectItem(index:number, libelle:string){
    this.selectedIndex = index
    switch(libelle){
      case 'Découvrez-nous':
        this.router.navigateByUrl('/a-propos')
        break;
      case 'Nos solutions':
        this.router.navigateByUrl('/produits')
        break;
      case 'Presse':
        this.router.navigateByUrl('/recherche-et-developpement')
        break;
      // case 'Blog':
      //   this.router.navigateByUrl('/blog')
      //   break;
      // case 'Tarifs':
      //   this.router.navigateByUrl('/tarifs');
      //   break;
      case 'Contactez-nous':
        this.router.navigateByUrl('/contacts');
        break;

    }

  }

}
