import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page'



@Component({
  selector: 'app-trump',
  templateUrl: './trump.page.html',
  styleUrls: ['./trump.page.scss'],
})
export class TrumpPage implements OnInit {
  
  dataReturned: any;

  constructor(public modalController: ModalController) { }


  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
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
