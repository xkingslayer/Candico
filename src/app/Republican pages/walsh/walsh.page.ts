import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { R17Page } from '../../modal/r17/r17.page';
import { R18Page } from '../../modal/r18/r18.page';
import { R19Page } from '../../modal/r19/r19.page';
import { R20Page } from '../../modal/r20/r20.page';
import { R21Page } from '../../modal/r21/r21.page';
import { R22Page } from '../../modal/r22/r22.page';
import { R23Page } from '../../modal/r23/r23.page';
import { R24Page } from '../../modal/r24/r24.page';

@Component({
  selector: 'app-walsh',
  templateUrl: './walsh.page.html',
  styleUrls: ['./walsh.page.scss'],
})
export class WalshPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal17() {
    const modal = await this.modalController.create({
      component: R17Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "R17Page"
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
async presentModal18() {
  const modal = await this.modalController.create({
    component: R18Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R18Page"
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
async presentModal19() {
  const modal = await this.modalController.create({
    component: R19Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R19Page"
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
async presentModal20() {
  const modal = await this.modalController.create({
    component: R20Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R20Page"
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
async presentModal21() {
  const modal = await this.modalController.create({
    component: R21Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R21Page"
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
async presentModal22() {
  const modal = await this.modalController.create({
    component: R22Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R22Page"
    }
  });
  
  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      //alert('Modal Sent Data :'+ dataReturned);
    }
  });

  return await modal.present();
}async presentModal23() {
  const modal = await this.modalController.create({
    component: R23Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R23Page"
    }
  });
  
  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      //alert('Modal Sent Data :'+ dataReturned);
    }
  });

  return await modal.present();
}async presentModal24() {
  const modal = await this.modalController.create({
    component: R24Page,
    componentProps: {
      "paramID": 123,
      "paramTitle": "R24Page"
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
