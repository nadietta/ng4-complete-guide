import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    console.log('RecipeDetailComponent onInit');
  }

  onAddToShoppingList() {
    console.log('onAddToShoppingList');
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
