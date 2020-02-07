import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { R9Page } from '../../modal/r9/r9.page';
import { R10Page } from '../../modal/r10/r10.page';
import { R11Page } from '../../modal/r11/r11.page';
import { R12Page } from '../../modal/r12/r12.page';
import { R13Page } from '../../modal/r13/r13.page';
import { R14Page } from '../../modal/r14/r14.page';
import { R15Page } from '../../modal/r15/r15.page';
import { R16Page } from '../../modal/r16/r16.page';

@Component({
  selector: 'app-weld',
  templateUrl: './weld.page.html',
  styleUrls: ['./weld.page.scss'],
})
export class WeldPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }
  
  async presentModal9() {
    const modal = await this.modalController.create({
      component: R9Page,
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
async presentModal10() {
  const modal = await this.modalController.create({
    component: R10Page,
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
async presentModal11() {
  const modal = await this.modalController.create({
    component: R11Page,
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
async presentModal12() {
  const modal = await this.modalController.create({
    component: R12Page,
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
async presentModal13() {
  const modal = await this.modalController.create({
    component: R13Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R13Page"
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
async presentModal14() {
  const modal = await this.modalController.create({
    component: R14Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R15Page"
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
async presentModal15() {
  const modal = await this.modalController.create({
    component: R15Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R15Page"
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
async presentModal16() {
  const modal = await this.modalController.create({
    component: R16Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R16Page"
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
