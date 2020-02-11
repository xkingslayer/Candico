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
import { R21PageModule } from './modal/r21/r21.module';
import { R22PageModule } from './modal/r22/r22.module';
import { R23PageModule } from './modal/r23/r23.module';
import { R24PageModule } from './modal/r24/r24.module';
import { D1PageModule } from './modal/d1/d1.module';
import { D2PageModule } from './modal/d2/d2.module';
import { D3PageModule } from './modal/d3/d3.module';
import { D4PageModule } from './modal/d4/d4.module';
import { D5PageModule } from './modal/d5/d5.module';
import { D6PageModule } from './modal/d6/d6.module';
import { D7PageModule } from './modal/d7/d7.module';
import { D8PageModule } from './modal/d8/d8.module';
import { D9PageModule } from './modal/d9/d9.module';
import { D10PageModule } from './modal/d10/d10.module';
import { D11PageModule } from './modal/d11/d11.module';
import { D12PageModule } from './modal/d12/d12.module';
import { D13PageModule } from './modal/d13/d13.module';
import { D14PageModule } from './modal/d14/d14.module';
import { D15PageModule } from './modal/d15/d15.module';
import { D16PageModule } from './modal/d16/d16.module';
import { D17PageModule } from './modal/d17/d17.module';
import { D18PageModule } from './modal/d18/d18.module';
import { D19PageModule } from './modal/d19/d19.module';
import { D20PageModule } from './modal/d20/d20.module';
import { D21PageModule } from './modal/d21/d21.module';
import { D22PageModule } from './modal/d22/d22.module';
import { D23PageModule } from './modal/d23/d23.module';
import { D24PageModule } from './modal/d24/d24.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModalPageModule, SecondPageModule, ThirdPageModule, FourthPageModule, FifthPageModule, R6PageModule, 
    R7PageModule, R8PageModule, R9PageModule, R10PageModule, R11PageModule, R12PageModule, R13PageModule, R14PageModule, R15PageModule, R16PageModule, R17PageModule, R18PageModule,
    R19PageModule, R20PageModule, R21PageModule, R22PageModule, R23PageModule, R24PageModule, D1PageModule, D2PageModule, D3PageModule,
    D4PageModule, D5PageModule, D6PageModule, D7PageModule, D8PageModule, D9PageModule, D10PageModule, D11PageModule, D12PageModule,
    D13PageModule, D14PageModule, D15PageModule, D16PageModule, D17PageModule, D18PageModule, D19PageModule, D20PageModule,
    D21PageModule, D22PageModule, D23PageModule, D24PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
