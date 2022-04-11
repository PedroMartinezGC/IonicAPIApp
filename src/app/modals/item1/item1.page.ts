import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Services
import { UpdateViewsService } from 'src/app/services/update-views.service';

export interface UpdateInterface{       //Interface with de API response model
    error: number,
    message: string,
    data: {
        item_id: string,
        title: string,
        value: number,
        visits: number
    }
}

@Component({
  selector: 'app-item1',
  templateUrl: './item1.page.html',
  styleUrls: ['./item1.page.scss'],
  providers: [UpdateViewsService]
})
export class Item1Page implements OnInit {

  updatedVisits: number;

  @Input() title: string;           //Shared values from ItemList page
  @Input() visits: any;
  @Input() value: any;
  @Input() item_id: any;

    
  constructor(
    public modalController: ModalController,
    private _updateViews: UpdateViewsService
    ) { }

  ngOnInit() {

    const item = {
      item_id: this.item_id,
      title: this.title,
      value: this.value,
      visits: parseInt(this.visits)
    }
    console.log(item);
    this._updateViews.updateViews(item.item_id).subscribe((visitas: UpdateInterface)=>{
      console.log(visitas);

      this.updatedVisits = visitas.data.visits;         //updating the number of visits with the POST service
      console.log(visitas.data);
    },
    error=>{
      console.log(<any>error);
    }
    );
  }
  closeModal(){
    this.modalController.dismiss(this.updatedVisits);     //When the modal is closed, we send the data with the new number of visits
  }
  

}
