import { Component, OnInit } from '@angular/core';
//import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  router: any;

  constructor(){ //public navCtrl: NavController, public navParams: NavParams
  }
  
  ngOnInit() {
  }


  goToTabsPage() { //criado para entrar na tabs page
    this.router.navigate(['/tabs/tab1'])
  }

}
