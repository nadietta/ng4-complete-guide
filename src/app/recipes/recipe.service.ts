import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tiramisu',
            'My tiramisu description',
            'http://www.ricettedalmondo.it/images/foto-ricette/104-tiramisu.jpg',
            [
                new Ingredient('eggs', 2),
                new Ingredient('mascarpone', 1)
            ]),
        new Recipe(
            'Cheescake',
            'My cheescake description',
            'http://www.checucino.it/wp-content/uploads/2017/03/iStock-152169260-930x620.jpg',
            [
                new Ingredient('strawberries', 10),
                new Ingredient('philadelphia', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        // to return a new array and not the reference to the array itself.
        // We don't want the recipes to be edited from outside.
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
