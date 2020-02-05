import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { R9Page } from '../../modal/r9/r9.page';

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
}
