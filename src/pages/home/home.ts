import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GradeOptionsPage } from '../grade-options/grade-options';
import { AboutFugaPage } from '../about-fuga/about-fuga';
import { IncreaseGpaPage } from '../increase-gpa/increase-gpa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToGradeOptions() {
    this.navCtrl.push(GradeOptionsPage);
  }

  goToIncreaseGPA() {
    this.navCtrl.push(IncreaseGpaPage);
  }

  goToAboutFUGA() {
    this.navCtrl.push(AboutFugaPage);
  }

}
