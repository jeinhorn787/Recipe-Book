import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Juicy Burger', 'Heart-attack on a plate!', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png', [
            new Ingredient('Meat Patty', 1),
            new Ingredient('Cheese', 5),
            new Ingredient('Onions', 2)
        ]),
        new Recipe('Mac n Cheese', 'The absolute best!', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg', [
            new Ingredient('Pasta', 10),
            new Ingredient('Cheese Sauce', 5)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}