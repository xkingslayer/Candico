import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D9Page } from '../../modal/d9/d9.page';
import { D10Page } from '../../modal/d10/d10.page';
import { D11Page } from '../../modal/d11/d11.page';
import { D12Page } from '../../modal/d12/d12.page';
import { D13Page } from '../../modal/d13/d13.page';
import { D14Page } from '../../modal/d14/d14.page';
import { D15Page } from '../../modal/d15/d15.page';
import { D16Page } from '../../modal/d16/d16.page';

@Component({
  selector: 'app-gabbard',
  templateUrl: './gabbard.page.html',
  styleUrls: ['./gabbard.page.scss'],
})
export class GabbardPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal33() {
    const modal = await this.modalController.create({
      component: D9Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D9Page"
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
  async presentModal34() {
    const modal = await this.modalController.create({
      component: D10Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D10Page"
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
  async presentModal35() {
    const modal = await this.modalController.create({
      component: D11Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D11Page"
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
  async presentModal36() {
    const modal = await this.modalController.create({
      component: D12Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D12Page"
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
  async presentModal37() {
    const modal = await this.modalController.create({
      component: D13Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D13Page"
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
  async presentModal38() {
    const modal = await this.modalController.create({
      component: D14Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D14Page"
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
  async presentModal39() {
    const modal = await this.modalController.create({
      component: D15Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D15Page"
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
  async presentModal40() {
    const modal = await this.modalController.create({
      component: D16Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D16Page"
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

