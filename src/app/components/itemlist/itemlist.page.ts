import { Component, OnInit } from '@angular/core';

//API
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Services
import { ItemserviceService } from 'src/app/services/itemservice.service';

//Modals
import { ModalController } from '@ionic/angular';
import { Item1Page } from 'src/app/modals/item1/item1.page';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.page.html',
  styleUrls: ['./itemlist.page.scss'],
  providers: [ItemserviceService]
})
export class ItemlistPage implements OnInit {
  
  items: any;
  id: any;
  updatedVisits: number;
  searchedItem: any;
  itemsCopy: any;

  constructor(
    private _http: HttpClient,
    private _itemService: ItemserviceService,
    public modalController: ModalController
    ) {

  }

  ngOnInit() {
    this._itemService.getItems().subscribe(response=>{
      
      this.items = response.data;                     //Object used for contain the response
      this.searchedItem = this.items;                 //Object used for the searchbar
      console.log(this.items);
    },
    error=>{
      console.log(<any>error);
    }
    );

  }

  searchItem(event: any){
    const text = event.target.value;

    this.resetChanges();              //method for update the complete item list again if we delete the words searched

    if(text && text.trim() != ''){
      this.searchedItem = this.searchedItem.filter((item: any)=>{
        return (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
    }
  }
  resetChanges(){
    this.searchedItem = this.items;   //for turning "searchedItem" to his original state
    
  }

  getId(selected:any){              //This method take the clicked item values
    this.id = selected;
    console.log(selected);
  }

  async openModal(title:string, visits:any, value:any, id:any) {      //This method open the modal when an item is clicked
    const modal = await this.modalController.create({
      component: Item1Page,
      cssClass: 'my-custom-modal',
      componentProps: {
        'title': title,
        'value': value,
        'visits': visits,
        'item_id': id
      }
    });

    console.log(title, visits, value, id);

    modal.onDidDismiss()                      //When the modal is closed, the number of visits is updated
      .then((data) => {

        this.updatedVisits = data.data;

        this.items.forEach((item: any)=>{
          if (item.item_id == this.id) {
            item.visits = this.updatedVisits;
          }
        });
        window.location.reload();
    });

    return await modal.present();
  }

}
