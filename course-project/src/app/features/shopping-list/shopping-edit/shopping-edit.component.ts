import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(nameInputRef, amountInputRef) {
    const ingName = this.nameInputRef.nativeElement.value,
          ingAmount = this.amountInputRef.nativeElement.value,
          newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}