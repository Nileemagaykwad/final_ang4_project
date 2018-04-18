import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A new test Recipe', 
        'this is simply test nothing much so dont expect.', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [new Ingredient("abc",1), new Ingredient("def",20)]),
        new Recipe('A new test Recipe number 2', 
        'this is simloy test nothing much so dont expect.', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [new Ingredient("ghi",1), new Ingredient("jkl",11)])
      ]; 
      constructor(private shoppinglistService: ShoppinglistService){}
    getRecipe(){        
        return this.recipes.slice();
    }
    addIngredientsToShoppinglist(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
    }
}