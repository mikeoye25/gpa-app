import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutFugaPage } from '../pages/about-fuga/about-fuga';
import { FivePointsGradePage } from '../pages/five-points-grade/five-points-grade';
import { FourPointsGradePage } from '../pages/four-points-grade/four-points-grade';
import { GradeOptionsPage } from '../pages/grade-options/grade-options';
import { HelpPage } from '../pages/help/help';
import { IncreaseGpaPage } from '../pages/increase-gpa/increase-gpa';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutFugaPage,
    FivePointsGradePage,
    FourPointsGradePage,
    GradeOptionsPage,
    HelpPage,
    IncreaseGpaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutFugaPage,
    FivePointsGradePage,
    FourPointsGradePage,
    GradeOptionsPage,
    HelpPage,
    IncreaseGpaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
