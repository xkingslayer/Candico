import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D41Page } from '../../modal/d41/d41.page';
import { D42Page } from '../../modal/d42/d42.page';
import { D43Page } from '../../modal/d43/d43.page';
import { D44Page } from '../../modal/d44/d44.page';
import { D45Page } from '../../modal/d45/d45.page';
import { D46Page } from '../../modal/d46/d46.page';
import { D47Page } from '../../modal/d47/d47.page';
import { D48Page } from '../../modal/d48/d48.page';

@Component({
  selector: 'app-warren',
  templateUrl: './warren.page.html',
  styleUrls: ['./warren.page.scss'],
})
export class WarrenPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal57() {
    const modal = await this.modalController.create({
      component: D41Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D341Page"
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
  async presentModal58() {
    const modal = await this.modalController.create({
      component: D42Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D42Page"
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
  async presentModal59() {
    const modal = await this.modalController.create({
      component: D43Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D43Page"
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
  async presentModal60() {
    const modal = await this.modalController.create({
      component: D44Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D44Page"
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
  async presentModal61() {
    const modal = await this.modalController.create({
      component: D45Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D45Page"
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
  async presentModal62() {
    const modal = await this.modalController.create({
      component: D46Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D46Page"
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
  async presentModal63() {
    const modal = await this.modalController.create({
      component: D47Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D47Page"
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
  async presentModal64() {
    const modal = await this.modalController.create({
      component: D48Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D48Page"
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
