import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://picsum.photos/500/300',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Schnitzel2',
      imageUrl: 'https://picsum.photos/500/302',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r3',
      title: 'Schnitzel3',
      imageUrl: 'https://picsum.photos/500/301',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    }; 
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
