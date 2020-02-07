import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-r19',
  templateUrl: './r19.page.html',
  styleUrls: ['./r19.page.scss'],
})
export class R19Page implements OnInit {

  modalTitle:R19Page;
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
