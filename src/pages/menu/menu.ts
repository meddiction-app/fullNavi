// import { Tab2Page } from './../tab2/tab2';
// import { Tab1Page } from './../tab1/tab1';
// import { TreatmentPage } from './../treatment/treatment';
// import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface{
  title:string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  // Baci root for our content view
  rootPage = 'TabsPage';

  //Reference to the appsroot nav
  @ViewChild(Nav) nav:Nav;

  pages: PageInterface[] =[
    {title:'HOME', pageName: 'TabsPage', tabComponent:'Tab1Page', index:0,icon: 'home'},
    {title:'Contacts', pageName: 'TabsPage', tabComponent:'Tab2Page', index:1,icon: 'contact'},
    {title:'치료하기', pageName: 'TabsPage', tabComponent:'TreatmentPage', index:2,icon: 'medkit'},
    {title:'Special ', pageName: 'TabsPage', tabComponent:'SpecialPage',icon: 'shuffle'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
    let params = {};
  
    // the index i s equal to the order of our tabs inside tbas.ts
    if(page.index){
      params= {tabIndex:page.index};
    }

    //the active dhild nav is our tbas navigation
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.popAll();
      this.nav.getActiveChildNav().select(page.index);
    }else{
      //tabs are not acive , so reset the root page
      //in this case: moving ot or from pseical page
      this.nav.popAll();
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }
    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
    return ;
  }
  //Fallback needed when there is no active chlid nav 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }


}
