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
import { R10PageModule } from './modal/r10/r10.module';
import { R11PageModule } from './modal/r11/r11.module';
import { R12PageModule } from './modal/r12/r12.module';
import { R13PageModule } from './modal/r13/r13.module';
import { R14PageModule } from './modal/r14/r14.module';
import { R15PageModule } from './modal/r15/r15.module';
import { R16PageModule } from './modal/r16/r16.module';
import { R17PageModule } from './modal/r17/r17.module';
import { R18PageModule } from './modal/r18/r18.module';
import { R19PageModule } from './modal/r19/r19.module';
import { R20PageModule } from './modal/r20/r20.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, SecondPageModule, ThirdPageModule, FourthPageModule, FifthPageModule, R6PageModule, 
    R7PageModule, R8PageModule, R9PageModule, R10PageModule, R11PageModule, R12PageModule, R13PageModule, R14PageModule, R15PageModule, R16PageModule, R17PageModule, R18PageModule,
    R19PageModule, R20PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
