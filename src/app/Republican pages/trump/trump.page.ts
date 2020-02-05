import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { SecondPage } from '../../modal/second/second.page';
import { ThirdPage } from '../../modal/third/third.page';
import { FourthPage } from '../../modal/fourth/fourth.page';
import { FifthPage } from '../../modal/fifth/fifth.page';
import { R6Page } from '../../modal/r6/r6.page';
import { R7Page } from '../../modal/r7/r7.page';
import { R8Page } from '../../modal/r8/r8.page';



@Component({
  selector: 'app-trump',
  templateUrl: './trump.page.html',
  styleUrls: ['./trump.page.scss'],
})
export class TrumpPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }


  ngOnInit() {}


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "ModalPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: SecondPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "SecondPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal3() {
    const modal = await this.modalController.create({
      component: ThirdPage,
      componentProps: {
        "paramID": 1234,
        "paramTitle": "ThirdPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  
  async presentModal4() {
    const modal = await this.modalController.create({
      component: FourthPage,
      componentProps: {
        "paramID": 1235,
        "paramTitle": "FourthPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal5() {
    const modal = await this.modalController.create({
      component: FifthPage,
      componentProps: {
        "paramID": 1235,
        "paramTitle": "FifthPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal6() {
    const modal = await this.modalController.create({
      component: R6Page,
      componentProps: {
        "paramID": 1235,
        "paramTitle": "FifthPage"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal7() {
    const modal = await this.modalController.create({
      component: R7Page,
      componentProps: {
        "paramID": 1235,
        "paramTitle": "R7Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  async presentModal8() {
    const modal = await this.modalController.create({
      component: R8Page,
      componentProps: {
        "paramID": 1235,
        "paramTitle": "R7Page"
      }
    });
    
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
}