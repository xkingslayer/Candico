import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './modal/modal.module';
import { SecondPageModule } from './modal/second/second.module';
import { ThirdPageModule } from './modal/third/third.module';
import { FourthPageModule } from './modal/fourth/fourth.module';
import { FifthPageModule } from './modal/fifth/fifth.module';
import { R6PageModule } from './modal/r6/r6.module';
import { R7PageModule } from './modal/r7/r7.module';
import { R8PageModule } from './modal/r8/r8.module';
import { R9PageModule } from './modal/r9/r9.module';
 


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, SecondPageModule, ThirdPageModule, FourthPageModule, FifthPageModule, R6PageModule, 
    R7PageModule, R8PageModule, R9PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
