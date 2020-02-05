import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-r7',
  templateUrl: './r7.page.html',
  styleUrls: ['./r7.page.scss'],
})
export class R7Page implements OnInit {

  modalTitle:R7Page;
  modelId:123;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
    ){ }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
  async dismiss() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
