import {Ingredient} from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppinglistService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 6)
      ];

    getIngredient(){
        return this.ingredients.slice();
    }
     addIngredient(ingredient:Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientsChanged.emit(this.ingredients.slice());
     }
     addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
     }
}