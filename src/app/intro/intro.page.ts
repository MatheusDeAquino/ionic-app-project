import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( public router: Router ){ 
  }
    goToTabsPage() { //criado para entrar na tabs page
    this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {

  }
}
