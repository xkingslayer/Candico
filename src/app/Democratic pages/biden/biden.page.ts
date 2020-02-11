import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D17Page } from '../../modal/d17/d17.page';  
import { D18Page } from '../../modal/d18/d18.page';
import { D19Page } from '../../modal/d19/d19.page';
import { D20Page } from '../../modal/d20/d20.page';
import { D21Page } from '../../modal/d21/d21.page';
import { D22Page } from '../../modal/d22/d22.page';
import { D23Page } from '../../modal/d23/d23.page';
import { D24Page } from '../../modal/d24/d24.page';

@Component({
  selector: 'app-biden',
  templateUrl: './biden.page.html',
  styleUrls: ['./biden.page.scss'],
})
export class BidenPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal41() {
    const modal = await this.modalController.create({
      component: D17Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D17Page"
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
  async presentModal42() {
    const modal = await this.modalController.create({
      component: D18Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D18Page"
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
  async presentModal43() {
    const modal = await this.modalController.create({
      component: D19Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D19Page"
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
  async presentModal44() {
    const modal = await this.modalController.create({
      component: D20Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D20Page"
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
  async presentModal45() {
    const modal = await this.modalController.create({
      component: D21Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D21Page"
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
  async presentModal46() {
    const modal = await this.modalController.create({
      component: D22Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D22Page"
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
  async presentModal47() {
    const modal = await this.modalController.create({
      component: D23Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D23Page"
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
  async presentModal48() {
    const modal = await this.modalController.create({
      component: D24Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D24Page"
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

