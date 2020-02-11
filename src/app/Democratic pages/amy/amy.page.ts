import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D1Page } from '../../modal/d1/d1.page';  
import { D2Page } from '../../modal/d2/d2.page';
import { D3Page } from '../../modal/d3/d3.page';
import { D4Page } from '../../modal/d4/d4.page';
import { D5Page } from '../../modal/d5/d5.page';
import { D6Page } from '../../modal/d6/d6.page';
import { D7Page } from '../../modal/d7/d7.page';
import { D8Page } from '../../modal/d8/d8.page';

@Component({
  selector: 'app-amy',
  templateUrl: './amy.page.html',
  styleUrls: ['./amy.page.scss'],
})
export class AmyPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal25() {
    const modal = await this.modalController.create({
      component: D1Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D1Page"
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
  async presentModal26() {
    const modal = await this.modalController.create({
      component: D2Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D2Page"
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
  async presentModal27() {
    const modal = await this.modalController.create({
      component: D3Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D3Page"
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
  async presentModal28() {
    const modal = await this.modalController.create({
      component: D4Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D4Page"
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
  async presentModal29() {
    const modal = await this.modalController.create({
      component: D5Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D5Page"
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
  async presentModal30() {
    const modal = await this.modalController.create({
      component: D6Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D6Page"
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
  async presentModal31() {
    const modal = await this.modalController.create({
      component: D7Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D7Page"
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
  async presentModal32() {
    const modal = await this.modalController.create({
      component: D8Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D8Page"
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
