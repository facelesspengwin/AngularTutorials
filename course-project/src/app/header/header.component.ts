import { Component } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipe()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  onGetData() {
    this.dataStorageService.getRecipes();
  }
}
