import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D49Page } from '../../modal/d49/d49.page';
import { D50Page } from '../../modal/d50/d50.page';
import { D51Page } from '../../modal/d51/d51.page';
import { D52Page } from '../../modal/d52/d52.page';
import { D53Page } from '../../modal/d53/d53.page';
import { D54Page } from '../../modal/d54/d54.page';
import { D55Page } from '../../modal/d55/d55.page';
import { D56Page } from '../../modal/d56/d56.page';

@Component({
  selector: 'app-bloom',
  templateUrl: './bloom.page.html',
  styleUrls: ['./bloom.page.scss'],
})
export class BloomPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal65() {
    const modal = await this.modalController.create({
      component: D49Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D49Page"
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
  async presentModal66() {
    const modal = await this.modalController.create({
      component: D50Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D50Page"
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
  async presentModal67() {
    const modal = await this.modalController.create({
      component: D51Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D51Page"
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
  async presentModal68() {
    const modal = await this.modalController.create({
      component: D52Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D52Page"
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
  async presentModal69() {
    const modal = await this.modalController.create({
      component: D53Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D53Page"
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
  async presentModal70() {
    const modal = await this.modalController.create({
      component: D54Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D54Page"
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
  async presentModal71() {
    const modal = await this.modalController.create({
      component: D55Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D55Page"
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
  async presentModal72() {
    const modal = await this.modalController.create({
      component: D56Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D56Page"
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

