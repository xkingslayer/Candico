import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { D25Page } from '../../modal/d25/d25.page';
import { D26Page } from '../../modal/d26/d26.page';
import { D27Page } from '../../modal/d27/d27.page';
import { D28Page } from '../../modal/d28/d28.page';
import { D29Page } from '../../modal/d29/d29.page';
import { D30Page } from '../../modal/d30/d30.page';
import { D31Page } from '../../modal/d31/d31.page';
import { D32Page } from '../../modal/d32/d32.page';

@Component({
  selector: 'app-pete',
  templateUrl: './pete.page.html',
  styleUrls: ['./pete.page.scss'],
})
export class PetePage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal33() {
    const modal = await this.modalController.create({
      component: D25Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D25Page"
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
      component: D26Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D26Page"
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
      component: D27Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D27Page"
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
      component: D28Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D28Page"
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
      component: D29Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D29Page"
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
      component: D30Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D30Page"
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
      component: D31Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D31Page"
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
      component: D32Page,
      componentProps: {
        "paramID": 123,
        "paramTitle": "D32Page"
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

