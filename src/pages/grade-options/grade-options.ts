import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FourPointsGradePage } from '../four-points-grade/four-points-grade';
import { FivePointsGradePage } from '../five-points-grade/five-points-grade';

/**
 * Generated class for the GradeOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-grade-options',
  templateUrl: 'grade-options.html',
})
export class GradeOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradeOptionsPage');
  }

  goToFourPointsGrade() {
    this.navCtrl.push(FourPointsGradePage);
  }

  goToFivePointsGrade() {
    this.navCtrl.push(FivePointsGradePage);
  }

}
