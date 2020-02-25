import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D33Page } from '../../modal/d33/d33.page';
import { D34Page } from '../../modal/d34/d34.page';
import { D35Page } from '../../modal/d35/d35.page';
import { D36Page } from '../../modal/d36/d36.page';
import { D37Page } from '../../modal/d37/d37.page';
import { D38Page } from '../../modal/d38/d38.page';
import { D39Page } from '../../modal/d39/d39.page';
import { D40Page } from '../../modal/d40/d40.page';

@Component({
  selector: 'app-sanders',
  templateUrl: './sanders.page.html',
  styleUrls: ['./sanders.page.scss'],
})
export class SandersPage implements OnInit {

  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal49() {
    const modal = await this.modalController.create({
      component: D33Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D33Page"
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
  async presentModal50() {
    const modal = await this.modalController.create({
      component: D34Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D34Page"
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
  async presentModal51() {
    const modal = await this.modalController.create({
      component: D35Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D35Page"
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
  async presentModal52() {
    const modal = await this.modalController.create({
      component: D36Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D36Page"
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
  async presentModal53() {
    const modal = await this.modalController.create({
      component: D37Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D37Page"
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
  async presentModal54() {
    const modal = await this.modalController.create({
      component: D38Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D38Page"
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
  async presentModal55() {
    const modal = await this.modalController.create({
      component: D39Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D39Page"
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
  async presentModal56() {
    const modal = await this.modalController.create({
      component: D40Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D40Page"
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
